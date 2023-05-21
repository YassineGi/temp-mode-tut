
const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write('Welcome to our home page');
    // res.end();
    if (req.url === '/'){
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about'){
        res.end('here is our short history');
    } 
    else {
        res.end(`<h1>Oups</h1>
                 <p>Nous ne parvenons pas à trouver la page que vous recherchez</p>
                 <a href='/'>Retour</a> `);
    }
});

server.listen(5001);