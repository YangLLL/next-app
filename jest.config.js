const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        // '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/$1'
    },
    testEnvironment: 'jsdom',
}

module.exports = createJestConfig(customJestConfig)