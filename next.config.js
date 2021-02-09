module.exports = {
  trailingSlash: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/about/index': { page: 'about' },
      '/auditoria/index': { page: 'auditoria' },
      '/bilogApp/index': { page: 'bilogApp' },
      '/contact/index': { page: 'contact' },
      '/success/index': { page: 'success' },
      '/success-calcagno/index': { page: 'success-calcagno' },
      '/success-bustamante/index': { page: 'success-bustamante' },
      '/success-orono/index': { page: 'success-orono' },
      '/success-marion/index': { page: 'success-marion' },
      '/success-corti/index': { page: 'success-corti' },
      '/success-tantera/index': { page: 'success-tantera' },
      '/success-alvarado/index': { page: 'success-alvarado' },
      '/laboratorio/index': { page: 'laboratorio' },
      '/odontologica/index': { page: 'odontologica' },
      '/versions-detail/index': { page: 'versions-detail' },
      '/descarga/index': { page: 'download-go' },
      '/utils/index': { page: 'utils'},
      '/users/index': { page: 'users' },
      '/features/index': { page: 'features' },
    }
  },
  images: {
    loader: 'imgix',
    path: 'https://www.bilog.com.ar',
  },
}