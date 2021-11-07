const { sendPOST } = require('./axios-instance')

const _FROMNUMBER = process.env.FROMNUMBER ?? `put your from number`

// field nroorigen is optional
const enviarMensajes = async (
  nrodestino,
  contenido,
  nroorigen = _FROMNUMBER
) => {
  const fields = { nrodestino, contenido, nroorigen }
  return sendPOST('/enviarsms', fields)
}

const listarMensajes = async (fecha) => {
  const fileds = { fecha }
  return sendPOST('/listarmensajes', fileds)
}

const listarRespuestas = async (fecha) => {
  const fields = { fecha }
  return sendPOST('/listarrespuestas', fields)
}

// RH = Rango Horario
const listarMensajesRH = async (fechaDesde, fechaHasta) => {
  const campos = { FechaHoraInicio: fechaDesde, FechaHoraFin: fechaHasta }
  return sendPOST('/listarmensajesconrangohorario', campos)
}

// RH = Rango Horario
const contarMensajesRH = async (fechaDesde, fechaHasta) => {
  const campos = { FechaHoraInicio: fechaDesde, FechaHoraFin: fechaHasta }
  return sendPOST('/contarmensajesconrangohorario', campos)
}

module.exports = {
  enviarMensajes,
  listarMensajes,
  listarRespuestas,
  listarMensajesRH,
  contarMensajesRH,
}
