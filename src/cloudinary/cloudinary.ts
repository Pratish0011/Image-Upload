import { v2 as cloudinary } from "cloudinary";

import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
          

export async function uploadToCloudinary(pathName:any) {
  try {
    if (!pathName) return null;

    const res = await cloudinary.uploader.upload(pathName, {
      resource_type: "auto",
      folder: "Multer",
    });

    return res;
  } catch (error) {
    return null;
  }
}
