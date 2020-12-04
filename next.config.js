module.exports = {
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/index': { page: '/index' },
      '/about/index': { page: '/about' },
      '/auditoria/index': { page: '/auditoria' },
      '/bilogApp/index': { page: '/bilogApp' },
      '/contact/index': { page: '/contact' },
      '/success/index': { page: '/success' },
      '/success-calcagno/index': { page: '/success-calcagno' },
      '/success-orono/index': { page: '/success-orono' },
      '/success-marion/index': { page: '/success-marion' },
      '/success-corti/index': { page: '/success-corti' },
      '/success-tantera/index': { page: '/success-tantera' },
      '/success-alvarado/index': { page: '/success-alvarado' },
      '/laboratorio/index': { page: '/laboratorio' },
      '/odontologica/index': { page: '/odontologica' },
      '/utils/index': { page: '/utils' },
      '/versions-detail/index': { page: '/versions-detail' },
      '/descarga/index': { page: '/download-go' },
    }
  },
}