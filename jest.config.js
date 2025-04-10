module.exports = {
  preset: "react",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Optional: Ensure setupTests.js exists
};
