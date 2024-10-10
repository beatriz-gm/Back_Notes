module.exports = {
  bail: true, 
  // bail - se algum erro for encontrado, para os testes para resolvê-lo
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js"
  ],
}