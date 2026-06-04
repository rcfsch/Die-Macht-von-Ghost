P
process.on('unhandledRejection'，（reason）=>{
Sentry.captureException(reason);
}）；
