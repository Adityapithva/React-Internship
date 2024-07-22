const fs = require('fs');
const path = require('path');

// Create the 'folder' directory if it doesn't exist
const destinationDir = path.join(__dirname, 'folder');
if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir);
}

const filesToMove = [
    'sample.txt',
    'img.jpg',
    '.env'
];

const moveFiles = (fileName, destinationDir) => {
    const sourcePath = path.join(__dirname, fileName);
    const destinationPath = path.join(destinationDir, fileName);
    fs.rename(sourcePath, destinationPath, (err) => {
        if (err) {
            console.log(`Error while moving file ${fileName}:`, err);
        } else {
            console.log(`File ${fileName} moved successfully`);
        }
    });
};

filesToMove.forEach(file => {
    moveFiles(file, destinationDir);
});
