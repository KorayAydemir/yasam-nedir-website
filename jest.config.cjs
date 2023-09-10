module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "mjs", "cjs"],
    moduleDirectories: ["node_modules"],
    testMatch: [ 
      '**/?(*.)(test).mjs', '**/?(*.)(spec|test).mjs' 
    ],

    transform: {
        "^.+\\.mjs$": "babel-jest",
        "^.+\\.cjs$": "babel-jest",
        "^.+\\.js$" : "babel-jest",
    },

    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/client/src/css/",
        "<rootDir>/build",
    ],
};
