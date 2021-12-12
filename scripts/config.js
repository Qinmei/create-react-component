const fs = require("fs");
const path = require("path");

const copyTemplateFile = (path) => {
  const files = fs.readdirSync(path.resolve(__dirname, path));
};
