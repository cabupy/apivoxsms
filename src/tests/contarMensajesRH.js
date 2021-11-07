if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { contarMensajesRH } = require('../modules/vox-methods')

contarMensajesRH('2021-11-04 00:00:00', '2021-11-04 23:00:00')
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message, error.stack))
