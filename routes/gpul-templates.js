import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import domToImage from 'dom-to-image-more';
import express from 'express';

const router = express.Router();

//Paths
const startTimestamp = '';
const endTimestamp = '';
/**
 * @openapi
 * /gpul-templates/gpul-school-talk:
 *   post:
 *     summary: Generates a sign for a GPUL School Talk given the provided information.
 *     tags:
 *       - Templates
 *     requestBody:
 *       description: Information about the talk
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               startTime:
 *                 type: string
 *               endTime:
 *                 type: string
 *               date:
 *                 type: string
 *               classroom:
 *                 type: string
 *               building:
 *                 type: string
 *               description:
 *                 type: string
 *           example:
 *             title: "Arquitectura ECS con Bevy como ejemplo"
 *             startTime: "8:30"
 *             endTime: "10:30"
 *             date: "06/07/2025"
 *             classroom: "3.5"
 *             building: "Facultade de Informática"
 *             description: ""
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */

router.post('/gpul-templates/gpul-school-talk', (req, res)  => {

    const talk = req.body;
    
    generate(talk);
    res.send('Hello World!');
})

export function generate(talk) {
    
    const templatePath = "templates/gpul-school-talk.ejs";
    const outputPath = "public/talk.html"
    
    ejs.renderFile(templatePath, {talk }, (err, renderedHtml) => {
        if(err) {
            console.error("Error while rendering template", err);
            return;
        }

        fs.writeFile(outputPath, renderedHtml, (err) => {
        if(err) {
            console.error('Error writing HTML file:', err);
            return;
        }
        console.log(`output HTML generated at: ${outputPath}`);
        }
        )
    });
    
}

export default router;