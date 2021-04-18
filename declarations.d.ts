type CallbackFunction = (err: Error | null, buffer: Buffer) => void;

declare module 'react-native-randombytes' {
  export function randomBytes(
    length: number,
    cb?: CallbackFunction,
  ): Buffer | void;
}
