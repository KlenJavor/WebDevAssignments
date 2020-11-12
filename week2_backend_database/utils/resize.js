"use strict";
const sharp = require("sharp");

const makeThumbnail = async (size, file, path) => {
  // size: {width: X, height: Y}
  // file = full path to image (req.file.path), thumbname = filename (req.file.filename)
  const thumbnail = await sharp(file).resize(size).toFile(path);
  return thumbnail;
};

module.exports = {
  makeThumbnail,
};
