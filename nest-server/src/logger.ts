import { Logger } from '@nestjs/common';
import * as fs from 'fs';
import { configure } from 'log4js';
import * as log4js from 'log4js';
import { environment } from 'environments/environment';

const logger = log4js.getLogger('nest');
configure({
    appenders: {
        nest: { type: 'file', filename: 'logger.log' }
    },
    categories: {
        default: { appenders: ['nest'], level: 'error' }
    }
});

fs.appendFile('logger.log', `\n${environment.startNewBuild}\n(${new Date()})\n\n`, (err) => {
    if (err) {
        throw err;
    }
});

export class MyLogger extends Logger {
    async log(message: string, context: string) {
        logger.level = 'info';
        logger.info(message);
        super.log(message, context);
    }
    async error(message: string, trace: string, context?: string) {
        logger.level = 'error';
        logger.error(message);
        super.error(message, trace);
    }
    async warn(message: string, context?: string) {
        logger.level = 'warn';
        logger.warn(message);
        super.warn(message, context);
    }
    async trace(message: string, trace: string, context?: string) {
        logger.level = 'trace';
        logger.trace(message);
        super.verbose(message, context);
    }
}
