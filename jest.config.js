module.exports = {
  reporters: [
    "default",

    // 📊 HTML Report
    ["jest-html-reporter", {
      pageTitle: "Relatório de Testes - Mock API",
      outputPath: "./reports/test-report.html",
      includeFailureMsg: true,
      includeConsoleLog: true
    }],

    // 📊 Allure Report
    ["jest-allure2-reporter", {
      resultsDir: "allure-results"
    }]
  ]
};