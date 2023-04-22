import express,{ Express, Request, Response } from "express";
import multer from "multer";

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
    upload(req, res, (err) => {
        if (err) {
            return res.end("Error uploading file");
        }
        res.end("File is uploaded")
    })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})