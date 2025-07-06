import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import gpulTemplatesRouter from './routes/gpul-templates.js';

const app = express();
const port = process.env.PORT || 3000;

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        myApi: '0.1.0',
        info: {
            title: 'GPUL API',
            version: '0.1.0',
            description: 'GPUL API Docs'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(express.json())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', gpulTemplatesRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    }
)