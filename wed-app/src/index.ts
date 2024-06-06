import express from "express";
import type { Request, Response } from "express";
import path from "path";

import { uploadImage, getImages, uploadImages } from "./controllers/albumController";

const app = express();
const PORT = process.env.PORT || 3000;

// Static Public Folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// Routes
app.post("/upload", uploadImages);
app.get("/photos", getImages);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
