if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { listarMensajes } = require('../modules/vox-methods')

listarMensajes('2021-11-04')
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message, error.stack))
