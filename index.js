const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 3000;

const swaggerOptions = {
    swaggerDefinition: {
        myApi: '0.1.0',
        info: {
            title: 'GPUL API',
            version: '0.1.0',
            description: 'GPUL API Docs'
        },
        servers: [
            {
                url: 'http://localhost:300'
            }
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/api/hello', (req, res)  => {
    res.send('Hello World!');
})

app.get('/gpul-templates', (req, res)  => {

    res.send('Hello World!');
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    }
)