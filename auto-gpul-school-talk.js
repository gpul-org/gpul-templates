const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const domToImage = require('dom-to-image-more');
//Paths
const startTimestamp = '';
const endTimestamp = '';

//types
//title
//time
//date
//place
//description
function generatePNG() {
    
    const templatePath = "templates/gpul-school-talk.ejs";
    const outputPath = "public/talk.html"
    let talk = {
        title: 'Arquitectura ECS con Bevy como ejemplo',
        startTime: '8:30',
        endTime: '10:30',
        date: '06/07/2025',
        classroom: '3.5',
        building: 'Facultade de Informática',
        description: ''
    }
    
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

generatePNG();