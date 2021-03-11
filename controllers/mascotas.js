/*  Archivo controllers/mascotas.js
 *  Simulando la respuesta de objetos Mascota
 *  en un futuro aquí se utilizarán los modelos
 */

const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  // Instanciaremos una nueva mascota utilizando la clase mascota
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascotas(req, res) {
  // Simulando dos mascotas y respondiendolas
  var mascota1 = new Mascota(1, 'Salchichon', 'Perro', 'url de imagen 1', 'desc1', '123456754', 'Chihuahua')
  var mascota2 = new Mascota(2, 'Wini', 'Perro', 'url de imagen 2', 'desc 2', '4561237894', 'Durango')
  res.send([mascota1, mascota2])
}

function modificarMascota(req, res) {
  // simulando una mascota previamente existente que el usuario utili
  var mascota1 = new Mascota(req.params.id, 'Salchichon', 'Perro', 'url de imagen 1', 'desc1', '123456754', 'Chihuahua')
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminarMascota(req, res) {
  res.status(200).send(`Mascota ${req.params.id} eliminada`);
}

module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
}