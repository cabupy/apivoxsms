if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { listarMensajesRH } = require('../modules/vox-methods')

listarMensajesRH('2021-11-03 15:00:00', '2021-11-03 15:30:00')
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message, error.stack))
