if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { listarRespuestas } = require('../modules/vox-methods')

listarRespuestas('20211103')
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message, error.stack))
