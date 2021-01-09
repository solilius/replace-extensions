const fs = require("fs");
const [
  SRC_EXTENSION,
  DEST_EXTENSION,
  SOURCE_PATH,
  IS_RECURSIVE,
] = process.argv.slice(2);

const getFiles = (src) => {
  fs.readdirSync(src).forEach((file) => {
    if (fs.lstatSync(`${src}/${file}`).isDirectory() && IS_RECURSIVE)
      getFiles(`${src}/${file}`);
    if (file.endsWith(SRC_EXTENSION))
      fs.renameSync(file, file.replace(SRC_EXTENSION, DEST_EXTENSION));
  });
};

getFiles(SOURCE_PATH);
