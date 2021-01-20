const axios = require('axios');
const fastify = require('fastify');

const RUNELITE_VERSION = '1.6.36.2';
const API_URL = `https://api.runelite.net/runelite-${RUNELITE_VERSION}`;
const UNKNOWN_PLUGIN = 'unknown';

const api = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

const app = fastify.fastify({
  logger: true,
});

app.get('/active-installs/:plugin', async (request, reply) => {
  const { plugin } = request.params;
  let message = UNKNOWN_PLUGIN;

  const plugins = await api.get(`${API_URL}/pluginhub`);

  if (plugins.data && plugins.data[plugin]) {
    message = plugins.data[plugin].toString();
  }

  reply
    .type('application/json')
    .send({
      color: 'blue',
      label: 'active installs',
      schemaVersion: 1,
      style: 'flat-square',
      message,
    })
    .code(message !== UNKNOWN_PLUGIN ? 200 : 404);
});

app.listen(3000, (error, address) => {
  if (error) {
    throw error;
  }

  app.log.info(`server listening on ${address}`);
});
