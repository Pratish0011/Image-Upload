import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const prefix = Date.now() + '-'
      cb(null,  prefix+file.fieldname)
    }
  })
  
  export const upload = multer({ storage: storage })