if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { enviarMensajes } = require('../modules/vox-methods')

//enviarMensajes('tonumber', 'message')
enviarMensajes('999999999', 'Hello world')
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message, error.stack))
