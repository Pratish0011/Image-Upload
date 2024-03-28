"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
// cloudinary.config({ 
//   cloud_name: 'dlv5gx3io', 
//   api_key: '121559211414816', 
//   api_secret: 'Bt-xOo-t-BeL6hM6ZTJ_xBjkoFs' 
// });
function uploadToCloudinary(pathName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!pathName)
                return null;
            const res = yield cloudinary_1.v2.uploader.upload(pathName, {
                resource_type: "auto",
                folder: "Multer",
            });
            return res;
        }
        catch (error) {
            return null;
        }
    });
}
exports.uploadToCloudinary = uploadToCloudinary;
