const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message    = err.message    || 'Internal Server Error';

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    message    = `Resource not found`;
    statusCode = 404;
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    message    = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
    statusCode = 409;
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    message    = Object.values(err.errors).map(e => e.message).join(', ');
    statusCode = 400;
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError')  { message = 'Invalid token';  statusCode = 401; }
  if (err.name === 'TokenExpiredError')  { message = 'Token expired';  statusCode = 401; }

  // ✓ FIXED: Only show detailed errors in development, sanitize in production
  if (process.env.NODE_ENV === 'development') {
    console.error('ERROR:', {
      message: err.message,
      statusCode,
      stack: err.stack,
      timestamp: new Date().toISOString(),
    });

    return res.status(statusCode).json({
      success: false,
      message,
      error: {
        statusCode,
        stack: err.stack,  // Only in dev
      },
    });
  }

  // Production: never expose stack traces, internal details, or database errors
  console.error('ERROR (production):', {
    message: err.message,
    statusCode,
    timestamp: new Date().toISOString(),
    // Don't log stack trace in production
  });

  // Sanitize error messages for production
  const productionMessage = statusCode >= 500
    ? 'An error occurred. Please try again later.'
    : message;

  res.status(statusCode).json({
    success: false,
    message: productionMessage,
    // Never include stack, error details, or metadata in production
  });
};

module.exports = errorHandler;