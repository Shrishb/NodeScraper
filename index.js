 const Hapi      = require('@hapi/hapi'),
    Scraapper = require('./scrapper');

    const init = async () => {

        const server = Hapi.server({
            port: 3001,
            host: 'localhost'
        });

        server.route({
            method: 'GET',
            path:'/',
            handler: (request, h) => (
                Scraapper.getFootballNews()
            )

        });

        await server.start();
        console.log('Server running on %s', server.info.uri);
    };

    process.on('unhandledRejection', (err) => {
        process.exit(1);
    });

 process.on('exit', (err) => {
     console.log('Server closed');
 });
init();