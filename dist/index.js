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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const multer_middleware_1 = require("./middleware/multer.middleware");
const cloudinary_1 = require("./cloudinary/cloudinary");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/upload", multer_middleware_1.upload.single("profile"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const filepath = req.file.path;
    const result = yield (0, cloudinary_1.uploadToCloudinary)(filepath);
    console.log(result);
    return res.json({
        msg: "Successfully uploaded to cloudinary",
        // @ts-ignore
        data: result.url
    });
}));
app.listen(3000, () => {
    console.log("Running on port 3000");
});
