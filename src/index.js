const axios = require('axios').default;

exports.handler = async (event, context, callback) => {
  try {
    if (!event.body) {
      callback(null, 400);
    }

    const body = JSON.parse(event.body);

    if (body.relay && typeof body.relay === 'string'
      && body.relay.indexOf('https://discord.com/api/webhooks/') === 0) {
      const url = body.relay;
      const data = body;
      delete body.relay;
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await axios.post(url, data, options).then(() => {
        callback(null, 200);
      }).catch(() => {
        console.error('Discord webhook did not return 200.');
        callback(null, 400);
      });
    } else {
      console.error('Body relay incorrect.');
      console.error(event);
      callback(null, 400);
    }
  } catch (e) {
    console.error(`${typeof e} exception occurred.`);
    console.error(e);
    console.error(event);
    callback(null, 400);
  }
};
