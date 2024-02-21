const fileSystemModule = require('./fileSystemModule');


// List files 
const directoryPath = 'mannat';
fileSystemModule.listFiles(directoryPath);

// Creating new directory
const directoryName = 'new_directory';
fileSystemModule.createDirectory(directoryName);

// Reading content of a text file
const filePath = 'ex.txt';
fileSystemModule.readFileContent(filePath);

// Writing  new content to a text file
const writeFilePath = 'File.txt';
const writeContent = 'Give your best ';
fileSystemModule.writeToFile(writeFilePath, writeContent);
