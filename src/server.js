import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './client/App';
import {StaticRouter as Router} from 'react-router-dom';
import {Routes} from './routes';
const app = express();

const HTML = (req, context) => {
    const body = renderToString(
        <Router location={req.url} context={context}>
            <App />
        </Router>);


    const html = `
        <html>
            <head>
                <title>Basic react node</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body style="margin:0;">
                ${body}
            </body>
            <script src="client.js"></script>
        </html>
    ` 
    return html;
}
const context = {};

app.use(express.static("dist"));



Routes.map(route => {
    app.get(route.url, (req, res) => {
        res.send(HTML(req, context))
    })
})

app.get('*', (req, res) => {
    res.send(HTML({url: '/404'}, context))
});

app.listen(3002, () => console.log('Listening on port 3002'));