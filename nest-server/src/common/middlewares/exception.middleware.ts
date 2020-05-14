// Vendors
import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, HttpException } from '@nestjs/common';
// Exceptions
import { ApplicationException } from '../exceptions/application.exception';
// Environments
import { Environments } from '../environments';

@Catch()
export class ExceptionHandlerFilter implements ExceptionFilter {
    catch(error: Error, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        if (error instanceof HttpException) {
            return response.status(error.getStatus()).send(error.message.message);
        }
        const status = (error instanceof ApplicationException) ?
            HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR;

        if (status === HttpStatus.BAD_REQUEST) {
            return response.status(status).send(error.message);
        }
        if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
            if (process.env.NODE_ENV === Environments.Production.toString()) {
                console.error(error.stack);
                return response.status(status).send('Internal Server Error!');
            } else {
                return response.status(status).send(error.message);
            }
        }
    }
}
