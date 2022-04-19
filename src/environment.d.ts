declare module 'environment' {
  import devEnv from './env/dev';

  const value: ReturnType<typeof devEnv>;

  export default value;
}
