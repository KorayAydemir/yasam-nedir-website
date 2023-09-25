module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "mjs", "cjs", "ts", "tsx"],
    moduleDirectories: ["node_modules"],
    testMatch: [
        '**/?(*.)(spec|test).(ts|tsx)'
    ],

    transform: {
        // does not work with babel-jest for some reason
        "^.+\\.tsx$": "ts-jest",
        "^.+\\.ts$": "ts-jest",
        "^.+\\.cjs$": "ts-jest",
    },

    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/client/src/css/",
        "<rootDir>/build",
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/__mocks__/fileMock.js',
    },
};
