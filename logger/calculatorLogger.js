//const winston = require('winston');

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]  ${message}`;
});

const calculatorLogger = () => {
    return createLogger({
        level: 'info',
        format: combine(
            timestamp({ format: "HH:mm:ss" }),
            myFormat
        ),
        //defaultMeta: { service: 'user-service' },
        transports: [new transports.Console(),
        //new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
        ],
    });
}

module.exports = calculatorLogger;