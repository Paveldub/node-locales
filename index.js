import express from "express";
import cors from 'cors'
import { I18n } from "i18n";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 8080
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const i18n = new I18n({
    locales: ['en', 'fr'],
    directory: path.join(__dirname, 'locales'),
    defaultLocale: 'en'
})

app.use(i18n.init)

app.get('/lang', async (req, res) => {
    res.send({
        img: res.__('img'),
        description: res.__('description')
    })
});

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log(`app is running: http://localhost:${port}`);
});