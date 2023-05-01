import express from 'express'
import productRouter from './routes/product.routes.js'
import multer from 'multer'
import { __dirname, __filename } from './path.js'

const app = express()
const PORT = 8080
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/img')
    },
    filname: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

app.use(express.json()) 
app.use(express.urlencoded({extended:true})) 
const upload = (multer({storage:storage}))

//Rutas
app.use('/product', productRouter)
app.use('static', express.static(__dirname + '/public'))
app.post('/upload', upload.single('product'), (req, res) => {
    res.send("Imagen subida")
})

app.listen(PORT, () => {
    console.log(`Serever on port ${PORT}`)
})
