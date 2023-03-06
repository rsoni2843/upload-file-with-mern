const singleFileModel = require("../models/singleFile.model");

class fileUpload {
  static singleFileUpload = async (req, res) => {
    try {
      // const {originalname,path,mimetype,size} = r
      const file = new singleFileModel({
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2),
      });
      await file.save();
      console.log("FILE", file);
      res.status(200).send("File uploaded successfully");
    } catch (err) {
      res.status(400).send(err.message);
    }
  };
}

// We are writing this function because
const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  } else {
    const dm = decimal || 2;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return (
      parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) +
      " " +
      sizes[index].toLowerCase()
    );
  }
};

module.exports = fileUpload;
