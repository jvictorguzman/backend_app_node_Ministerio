import models from "./../models"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
/**
 * Login(Autenticacion)
 * @param {*} req Solicitud
 * @param {*} res Respuesta
 * @returns retorna un token mas el usuario
 */
export async function login(req, res) {
  const { email, password } = req.body;

  let user = await models.Usuario.findOne({
    where: {
      email: email
    }
  })
  //si el usuario no existe
  if (!user) {
    return res.status(200).send({
      mensaje: "Credenciales incorrectas"
    })
  }

  // verificar la contrasena
  let correcto = await bcrypt.compare(password, user.password);
  if (correcto) {
    //generar token
    let payload = {
      id: user.id,
      email: user.mail,
      time: new Date()
    }

    const token = jwt.sign(payload, "MI_CODIGO_SECRETO", {
      expiresIn: 60
    })

    res.status(200).send({
      access_token: token,
      usuario: user,
      error: false
    })
  } else {
    return res.status(200).send({
      mensaje: "Contrasena incorrecta"
    })
  }
}
/**
 * Registro de nuevos Usuarios
 * @param {body} req datos de solicitud
 * @param {*} res  respuesta para el servidor
 */
export const registro = async function (req, res) {
  let user = await models.Usuario.findOne({
    where: {
      email: req.body.email
    }
  })
  if (!user) {
    //cifrar la contrasena
    let pass_cifrado = await bcrypt.hash(req.body.password, 12)
    req.body.password = pass_cifrado
    await models.Usuario.create(req.body)
    res.status(200).send({ mensaje: "Usuario Registrado" })
  } else {
    res.status(200).send({ mensaje: "El correo ya esta registrado" })
  }
}

export const perfil = (req, res) => {
  res.json({ mensaje: "estas logueado...." })
}
