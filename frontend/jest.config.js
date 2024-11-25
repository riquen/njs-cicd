module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: [
        '<rootDir>/node_modules',
        'node_modules',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/dist/',
    ],
};