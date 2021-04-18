# RNBenchmark

## Create project

```shell
react-native init RNBenchmark --template react-native-template-typescript
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

### 1. expo-random

- expo-random required deployment target to be set to iOS 11.
- change Podfile to `platform :ios, '11.0'`
- Expo requires [unimodules](https://docs.expo.io/bare/installing-unimodules/)
- [Android]: Make sure Gradle is set to [6.8](https://github.com/expo/expo/blob/master/android/gradle/wrapper/gradle-wrapper.properties#L6)

## Benchmark

