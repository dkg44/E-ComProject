class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode

        Eror.captureStackTrace(this, this.constructor);

    }
}

module.exports = ErrorHandler