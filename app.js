const axios = require('axios');
const fastify = require('fastify');

const RUNELITE_BOOTSTRAP_URL = 'https://static.runelite.net/bootstrap.json';
const RUNELITE_API_URL = `https://api.runelite.net`;
const UNKNOWN_PLUGIN = 'unknown';

const api = axios.create({
  responseType: 'json',
});

const app = fastify.fastify({
  logger: true,
});

app.get('/active-installs/:plugin', async (request, reply) => {
  const { plugin } = request.params;
  let message = UNKNOWN_PLUGIN;

  const runeLiteBootstrap = await api.get(RUNELITE_BOOTSTRAP_URL);

  if (!runeLiteBootstrap.data || !runeLiteBootstrap.data.client || !runeLiteBootstrap.data.client.version) {
    reply.type('application/json').send().code(503);

    return;
  }

  const plugins = await api.get(`${RUNELITE_API_URL}/runelite-${runeLiteBootstrap.data.client.version}/pluginhub`);

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
