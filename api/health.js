const message = 'Hello World! This is a health check endpoint.';

module.exports.health = (event, context, callback) => {
  const response = { 
    statusCode: 200, 
    body: JSON.stringify({title: message}),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  };
  callback(null, response);
};
