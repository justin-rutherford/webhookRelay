const axios = require('axios').default;

exports.handler = async (event, context, callback) => {
  if (event.relay && typeof event.relay === 'string'
      && event.relay.indexOf('https://discord.com/api/webhooks/') === 0) {
    const url = event.relay;
    const data = event;
    delete data.relay;
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.post(url, data, options).then(() => {
      callback(null, 200);
    }).catch(() => {
      callback(null, 400);
    });
  } else {
    callback(null, 400);
  }
};
