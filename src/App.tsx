import React, {useState} from 'react';
import {
  GestureResponderEvent,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import styled from '@emotion/native';
import {Suite, EventType, Event} from 'react-native-benchmark';

import 'react-native-get-random-values';
import {generateSecureRandom} from 'react-native-securerandom';
import {randomBytes} from 'react-native-randombytes';
import RNSimpleCrypto from 'react-native-simple-crypto';
import {randomBytes as randomnessRandomBytes} from 'react-native-randomness';
import {getRandomBytes, getRandomBytesAsync} from 'expo-random';

const getRandomValues = require('get-random-values-polypony');

const ButtonContainer = styled.TouchableOpacity`
  background-color: black;

  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styled.Text`
  color: white;
`;

type ButtonProps = React.FC<{
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

const Button: ButtonProps = props => (
  <ButtonContainer onPress={props.onPress}>
    <ButtonLabel>{props.title}</ButtonLabel>
  </ButtonContainer>
);

const suite = new Suite();
const SIZE = 16;

const App: React.FC = () => {
  const [results, setResults] = useState('');

  const go = () => {
    setResults('Started');

    suite
      .add('expo-random [Sync]', () => {
        getRandomBytes(SIZE);
      })
      .add('expo-random [Async]', async () => {
        await getRandomBytesAsync(SIZE);
      })
      .add('react-native-randomness', () => {
        randomnessRandomBytes(SIZE);
      })
      .add('get-random-values-polypony', () => {
        getRandomValues(new Uint8Array(SIZE));
      })
      .add('react-native-get-random-values', () => {
        global.crypto.getRandomValues(new Uint8Array(SIZE));
      })
      .add('react-native-securerandom', () => {
        generateSecureRandom(SIZE);
      })
      .add('react-native-randombytes [SJCL]', () => {
        randomBytes(SIZE);
      })
      .add('react-native-randombytes [Native]', async () => {
        await new Promise((resolve, _reject) => {
          randomBytes(SIZE, resolve);
        });
      })
      .add('react-native-simple-crypto', () => {
        RNSimpleCrypto.utils.randomBytes(SIZE);
      })
      .on(EventType.COMPLETE, (_event: Event) => {
        setResults(suite.toString());
        console.log(JSON.stringify(suite.toJSON(), null, 2));
      })
      .run({async: true});
  };

  return (
    <SafeAreaView>
      <Button onPress={() => go()} title="Start" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>{results}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
