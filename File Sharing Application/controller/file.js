const multer = require("multer");

const path = require("path");

const uploadDirectoryPath = path.join(__dirname, "..", "files");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectoryPath);
  },
});

const upload = multer({
  storage: storage,
}).single("resume");

const uploadFile = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log("ERROR WHILE UPLOADING FILE", err);
      return;
    }

    console.log("File uplaoded successfully");
    res.json({
      success: true,
      message: "File uploaded successfully",
    });
  });
  console.log(req.body);
  res.json({
    success: true,
    message: "Upload file API",
  });
};

const generateDynamicLink = async (req, res) => {
  res.json({
    success: true,
    message: "Generate Dynamic Link API",
  });
};
async () => {};

const downloadFile = async (req, res) => {
  res.json({
    success: true,
    message: "Download file API",
  });
};

const sendFile = async (req, res) => {
  res.json({
    success: true,
    message: "Send file API",
  });
};

const fileController = {
  uploadFile,
  generateDynamicLink,
  downloadFile,
  sendFile,
};

module.exports = fileController;
