const fs = require('fs')

//write html file

function writeFile(html){
    fs.writeFile('./dist/index.html', html, err => {
        if (err){
            throw err
        }
        console.log("index.html generated as saved to `dist folder`");
        copyFile();
    })

     
    
}

const copyFile = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            console.log(err);
        }                
        console.log('CSS copied to `dist folder`')
    });
}


module.exports = writeFile, copyFile;