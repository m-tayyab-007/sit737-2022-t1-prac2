const calculatorLogger = require('./calculatorLogger')

let logger = null;

if (process.env.NODE_ENV !== 'production') {
    logger = calculatorLogger();
  }


  module.exports = logger;