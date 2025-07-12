const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: '0.0.0.0', // WAJIB biar bisa diakses publik
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return { status: 'ok', message: 'Hapi server is running!' };
    },
  });

  await server.start();
  console.log('Server running at:', server.info.uri);
};

init();
