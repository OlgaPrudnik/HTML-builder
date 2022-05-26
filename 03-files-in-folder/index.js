const path = require("path");
const fs = require("fs/promises");

const secretFolderPath = path.join(__dirname, "secret-folder");

readDirs(secretFolderPath);

async function readDirs(dirPath) {
    let option = { withFileTypes: true };
    let fsElements = await fs.readdir(dirPath, option);
    for (let element of fsElements) {
        let currentElementPath = path.join(dirPath, element.name);
        if (element.isDirectory()) {
            readDirs(currentElementPath);
        } else {
            getFileInfo(currentElementPath)
                .then(info => console.log(info));
        }
    }
}

async function getFileInfo(filePath) {
    let fileStat = await fs.stat(filePath);
    let fileSize = `${fileStat.size}b`;
    let fileExt = path.extname(filePath);
    let fileName = path.basename(filePath, fileExt);
    fileExt = fileExt.replace(".", "");
    let fileInfo = [fileName, fileExt, fileSize].join(" - ");
    return fileInfo;
}
