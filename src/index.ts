import express, { Request, Response} from "express";
import dotnev from "dotenv";
import { upload } from "./middleware/multer.middleware";
import { uploadToCloudinary } from "./cloudinary/cloudinary";

dotnev.config();

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/upload", upload.single("profile"), async(req: Request, res: Response) => {

  // @ts-ignore
  const filepath = req.file.path
 
  const result = await uploadToCloudinary(filepath)
  console.log(result)
  return res.json({
    msg:"Successfully uploaded to cloudinary",
    // @ts-ignore
    data: result.url
  })
});

app.listen(3000,()=>{
    console.log("Running on port 3000")
});
