import express from "express"

//importar modulos locales
import { Route } from './router'

// variables auxiliares
const PORT = process.env.PORT || 3000

// iniciar la app con express
const app = express()

// para cargar archivos estaticos 
app.use(express.static('public'))

//para req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// habilitar rutas
app.use('/api', Route)

// levantar un servidor
app.listen(PORT, () => {
  console.log(`Servidor levantado en http://127.0.0.1:${PORT}`)
})