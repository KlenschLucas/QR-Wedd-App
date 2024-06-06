import multer from "multer";
import path from "path";
import fs from "fs";

import type { FileFilterCallback } from "multer";
import type { Request, Response } from "express";

// Set up storage engine for local storage
const storage = multer.diskStorage({
  destination: "./src/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init upload for multiple files
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB per file
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) => {
    checkFileType(file, cb);
  },
}).array("images", 10); // Allow up to 10 files to be uploaded at once

// Check file type
function checkFileType(file: Express.Multer.File, cb: FileFilterCallback) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Error: Images Only!"));
  }
}

// Upload Image
export const uploadImage = (req: Request, res: Response) => {
  upload(req, res, (error) => {
    if (error) {
      res.json({ error: error.message });
    } else {
      if (req.file === undefined) {
        res.json({ error: "No File Selected!" });
      } else {
        res.json({
          message: "File Uploaded!",
          file: `/uploads/${req.file.filename}`,
        });
      }
    }
  });
};

// Get Images
export const getImages = (req: Request, res: Response) => {
  fs.readdir("./src/uploads", (err, files) => {
    if (err) {
      res.json({ error: err.message });
    } else {
      res.json(files);
    }
  });
};

// Upload Images
export const uploadImages = (req: Request, res: Response) => {
  upload(req, res, (error) => {
    console.log(req.files);
    if (error) {
      res.json({ error: error.message });
    } else {
      if (req.files === undefined || req.files.length === 0) {
        res.json({ error: "No Files Selected!" });
      } else {
        const uploadedFiles = (req.files as Express.Multer.File[]).map(
          (file) => `/uploads/${file.filename}`
        );
        res.json({
          message: "Files Uploaded!",
          files: uploadedFiles,
        });
      }
    }
  });
};
