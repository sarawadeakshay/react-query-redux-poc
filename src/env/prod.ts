export default function prodEnv() {
  return {
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
    name: 'prod build is ready',
    key: 'KEY prod is successful',
    mode: 'prod'
  };
}

export type Environment = ReturnType<typeof prodEnv>;
