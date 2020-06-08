const redis = require('redis');
const publisher = redis.createClient();

publisher.publish('notification', JSON.stringify({ message: 'Hello world '}), () => {
  process.exit(0);
});