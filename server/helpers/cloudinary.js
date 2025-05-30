import dotenv from "dotenv";
import multer from "multer";
dotenv.config();

import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create in-memory storage for multer
const storage = multer.memoryStorage();

// Image upload utility using Cloudinary
async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}

// Create multer middleware
const upload = multer({ storage });

// Export for use in routes or controllers
export { upload, imageUploadUtil };

