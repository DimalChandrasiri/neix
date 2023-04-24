import express,{ Express, Request, Response } from "express";
import multer from "multer";
import SwaggerParser from "@apidevtools/swagger-parser";

const storage = multer.diskStorage({
    destination: (
        req: Request, 
        file: Express.Multer.File, 
        cb: any
    ) => {
        cb(null, 'tmp/');
    },
    filename: (
        req: Request, 
        file: Express.Multer.File, 
        cb: any
    ) => {
        cb(null, file.fieldname + "-" + Date.now());
    }
});
const upload = multer({ storage : storage }).single('yml');

const app: Express = express();
const port = 8000;

app.get('/',(req: Request, res: Response) => {
    res.send('Express server for open-api');
});

app.post('/yml', (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.end("Error uploading file");
        }
        if (req.file) {
            try {
                let api = await SwaggerParser.validate(Buffer.from(req.file.buffer).toString());
                console.log("API name: %s, Version: %s", api.info.title, api.info.version);
              }
              catch(err) {
                console.error(err);
            }
            res.end("File is uploaded")
        }
    })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})