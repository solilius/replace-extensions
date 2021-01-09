const fs = require("fs");
const [
  SRC_EXTENSION,
  DEST_EXTENSION,
  SOURCE_PATH,
  IS_RECURSIVE,
] = process.argv.slice(2);

const getFiles = (src) => {
  const filesList = [];
  fs.readdirSync(src).forEach((file) => {
    if (fs.lstatSync(`${src}/${file}`).isDirectory() && IS_RECURSIVE) {
      filesList.push(...getFiles(`${src}/${file}`));
    }
    if (file.endsWith(SRC_EXTENSION)) filesList.push(`${src}/${file}`);
  });

  return filesList;
};

const files = getFiles(SOURCE_PATH);
files.forEach((file, index) => {
  fs.renameSync(file, file.replace(SRC_EXTENSION, DEST_EXTENSION));
  console.log(`Updating (${index + 1}/${files.length}) - ${file}`);
});

console.log(
  `Done updating ${files.length} files in ${SOURCE_PATH} ${
    IS_RECURSIVE ? "recursively" : ""
  }.`
);
