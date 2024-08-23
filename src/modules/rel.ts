//1.commonjs module in typescript
// //example of importing an external library using ambient namespaces
// declare namespace require {
//   function (path: string): any;
// }
// const fs = require("fs");
// //example 2:
// declare namespace jQuery {
//   function ajax(url: string, settings?: any): void;
// }
// jQuery.ajax("/api/get_user", {
//   method: "GET",
// });

//2. typescript with nodejs
import http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

//3. typescript with express
import express { Application, Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})

//4. typescript with react
import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    message: string;
}

const App: React.FC<AppProps> = ({ message }) => <div>{message}</div>;

ReactDOM.render(<App message="Hello World!" />, document.getElementById('root'));

//5. typescript with mongodb
import { MongoClient } from 'mongodb';

async function main ((params:type) {
    const url = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected to the database");
    }finally {
        await client.close();
    }
}
main().catch(console.error);

//6. typescript with mysql
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'example',
    password: 'example',
    database: 'example',
    entities: [__dirname + '/entity/*.ts'], //is used to specify the path to the entities(i.e the tables) in the database
    synchronize: true,
}).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Error connecting to the database:', error);
}

//7. typescript with webpack
//webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
        ],
    },
};

//8. typescript with babel
//babel.config.js
module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
};

//9. typescript with jest
//jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};

//10. typescript with protractor
//protractor is used for end-to-end testing of Angular applications and
// is built on top of WebDriverJS.
//its main purpose is to test the application from the user's perspective.
//protractor.conf.js
exports.config = {
    framework: 'jasmine',
    specs: ['example_spec.ts'],
    capabilities: {
        browserName: 'chrome',
    },
};

//11. typescript with selenium
//selenium is a tool used for automating web browsers.
//it is used for testing web applications.
//selenium.conf.js
exports.config = {
    framework: 'jasmine',
    specs: ['example_spec.ts'],
    capabilities: {
        browserName: 'chrome',
    },
};

//12. typescript with cypress
//cypress is a tool used for end-to-end testing of web applications.
//cypress.conf.js
module.exports = {
    integrationFolder: 'cypress/integration',
    testFiles: '**/*.ts',
    browsers: ['chrome'],
};