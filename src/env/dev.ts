export default function devEnv() {
  return {
    isProduction: false,
    isDevelopment: true,
    isTesting: false,
    name: 'DEV 123',
    key: 'KEY DEV 099',
    mode: 'dev'
  };
}

export type Environment = ReturnType<typeof devEnv>;
