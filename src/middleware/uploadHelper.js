const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadImage = (destinonFolder, baseFolder = "uploads") => {
  if (!destinonFolder) {
    throw new Error("O nome da pasta de destino é obrigatório.");
  }

  const fullPath = path.join(__dirname, "..", baseFolder, destinonFolder);

  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, fullPath);
    },

    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extension = file.mimetype.split("/")[1];

      cb(null, `${uniqueSuffix}.${extension}`);
    },
  });

  return multer({ storage });
};

module.exports = uploadImage;