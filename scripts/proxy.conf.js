module.exports = {
  '/api': {
    target: process.env.API,
    changeOrigin: true,
    secure: true
  },
  '/ws': {
    target: process.env.WS,
    ws: true,
    changeOrigin: true,
    secure: true
  }
}

