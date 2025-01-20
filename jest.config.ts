//jest.config.ts	
// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Maps `@/` to `src/`
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transforms TypeScript files using ts-jest
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // Matches test files
};

export default createJestConfig(config);