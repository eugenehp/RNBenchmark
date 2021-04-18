# RNBenchmark

This is a React Native sandbox to test performance of different **Random Number Generator** (RNG) libraries using [this](https://www.npmjs.com/package/react-native-benchmark) benchmark library.

## Main benchmark code

```Typescript
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
```

## Install libraries that will be benchamrked

```shell
npm i -s benchmark @types/benchmark
# this is a slightly updated version of @consento/sync-randombytes
npm i -s get-random-values-polypony
npm i -s react-native-get-random-values
npm i -s expo-random react-native-unimodules
npm i -s react-native-securerandom
npm i -s react-native-randombytes
npm i -s react-native-simple-crypto
npm i -s react-native-randomness
```

react-native-get-random-values

[![npm downloads](https://img.shields.io/npm/dw/react-native-get-random-values.svg?label=npm%20downloads&style=for-the-badge)](https://npmcharts.com/compare/react-native-get-random-values?minimal=true)

expo-random

[![npm downloads](https://img.shields.io/npm/dw/expo-random.svg?label=npm%20downloads&style=for-the-badge)](https://npmcharts.com/compare/expo-random?minimal=true)

react-native-securerandom

[![npm downloads](https://img.shields.io/npm/dw/react-native-securerandom.svg?label=npm%20downloads&style=for-the-badge)](https://npmcharts.com/compare/react-native-securerandom?minimal=true)

react-native-randombytes

[![npm downloads](https://img.shields.io/npm/dw/@consento/sync-randombytes.svg?label=npm%20downloads&style=for-the-badge)](https://npmcharts.com/compare/@consento/sync-randombytes?minimal=true)

react-native-simple-crypto

[![npm downloads](https://img.shields.io/npm/dw/react-native-simple-crypto.svg?label=npm%20downloads&style=for-the-badge)](https://npmcharts.com/compare/react-native-simple-crypto?minimal=true)

react-native-randomness

[![npm downloads](https://img.shields.io/npm/dw/react-native-randomness.svg?label=npm%20downloads&style=for-the-badge)](https://npmcharts.com/compare/react-native-randomness?minimal=true)

## Link newly added libraries

```shell
npx react-native link
cd ios && pod install
```

### expo-random

- expo-random required deployment target to be set to iOS 11.
- change Podfile to `platform :ios, '11.0'`
- Expo requires [unimodules](https://docs.expo.io/bare/installing-unimodules/)
- [Android]: Make sure Gradle is set to [6.8](https://github.com/expo/expo/blob/master/android/gradle/wrapper/gradle-wrapper.properties#L6)

## Benchmark

You can find results of running iOS simulator and Android emulator on top of i7 CPU [here](./benchmark)

## Top Downloads

|                                   |   iOS   | Android | NPM Downloads | GitHub Stars |
|-----------------------------------|:-------:|:-------:|:-------------:|:------------:|
| react-native-get-random-values    | 22,883  | 3,362   | 494,058       | 128          |
| expo-random [Sync]                | 32,232  | 4,137   | 86,984        | 13,444       |
| expo-random [Async]               | 857     | 364     | 86,984        | 13,444       |
| react-native-securerandom         | 300     | 143     | 69,728        | 51           |
| react-native-randombytes [SJCL]   | 152,162 | 4,520   | 20,395        | 70           |
| react-native-randombytes [Native] | 254     | 125     | 20,395        | 70           |
| react-native-simple-crypto        | 215     | 101     | 2,573         | 29           |
| get-random-values-polypony        | 22,691  | 3,579   | 5             | 2            |
| react-native-randomness           | 386     | 170     | 3             | 3            |

## Top performance

|                                   |   iOS   | Android | NPM Downloads | GitHub Stars |
|-----------------------------------|:-------:|:-------:|:-------------:|:------------:|
| react-native-randombytes [SJCL]   | 152,162 | 4,520   | 20,395        | 70           |
| expo-random [Sync]                | 32,232  | 4,137   | 86,984        | 13,444       |
| react-native-get-random-values    | 22,883  | 3,362   | 494,058       | 128          |
| get-random-values-polypony        | 22,691  | 3,579   | 5             | 2            |
| expo-random [Async]               | 857     | 364     | 86,984        | 13,444       |
| react-native-randomness           | 386     | 170     | 3             | 3            |
| react-native-securerandom         | 300     | 143     | 69,728        | 51           |
| react-native-randombytes [Native] | 254     | 125     | 20,395        | 70           |
| react-native-simple-crypto        | 215     | 101     | 2,573         | 29           |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## Sponsorship

Thank you to our sponsors:

[<img width="300px" src="https://user-images.githubusercontent.com/1857263/114124204-c4e1eb80-98a8-11eb-80ab-64683c24bbc5.png" alt="Reactive Lions™" target="_blank">](https://www.reactivelions.com)

## License

[MIT](./LICENSE)

Copyright (c) 2021 Eugene Hauptmann
