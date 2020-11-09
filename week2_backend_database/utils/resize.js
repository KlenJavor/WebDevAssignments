"use strict";
const sharp = require("sharp");

const makeThumbnail = async (size, file, thumbname) => {
  // size: {width: X, height: Y}
  // file = full path to image (req.file.path), thumbname = filename (req.file.filename)
  const thumbnail = await sharp(file)
    .resize(size.width, size.height)
    .toFile("./thumbnails/" + thumbname);
  return thumbnail;
};

module.exports = {
  makeThumbnail,
};
