export default function testEnv() {
  return {
    isProduction: false,
    isDevelopment: false,
    isTesting: true,
    name: 'TEST build',
    key: 'KEY TEST',
    mode: 'TEST'
  };
}

export type Environment = ReturnType<typeof testEnv>;
