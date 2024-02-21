const fs = require('fs').promises;//Asynchronous 

// List Files
async function listFiles(directoryPath) {
    try {
        const files = await fs.readdir(directoryPath);
        console.log('Files in directory:');
        files.forEach(file => {
            console.log(file);
        });
    } catch (err) {
        console.error('Error listing files:', err);
    }
}

//Create Directory
async function createDirectory(directoryName) {
    try {
        await fs.mkdir(directoryName);
        console.log(`Directory '${directoryName}' created successfully.`);
    } catch (err) {
        console.error('Error creating directory:', err);
    }
}

//Read File Content
async function readFileContent(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(`Content of file '${filePath}':`);
        console.log(data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

// Write to File
async function writeToFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content);
        console.log(`Content written to file '${filePath}' successfully.`);
    } catch (err) {
        console.error('Error writing to file:', err);
    }
}

module.exports = {
    listFiles,
    createDirectory,
    readFileContent,
    writeToFile
};
