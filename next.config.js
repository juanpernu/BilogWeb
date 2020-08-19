module.exports = {
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/index': { page: '/index' },
      '/about/index': { page: '/about' },
      '/auditoria/index': { page: '/auditoria' },
      '/bilogApp/index': { page: '/bilogApp' },
      '/contact/index': { page: '/contact' },
      '/success-calcagno/index': { page: '/success-calcagno' },
      '/success-orono/index': { page: '/success-orono' },
      '/laboratorio/index': { page: '/laboratorio' },
      '/odontologica/index': { page: '/odontologica' },
      '/utils/index': { page: '/utils' },
      '/versions-detail/index': { page: '/versions-detail' },
      '/descarga/index': { page: '/download-go' },
    }
  },
}