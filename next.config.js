module.exports = {
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/new/index': { page: '/index' },
      '/new/about': { page: '/about' },
      '/new/auditoria': { page: '/auditoria' },
      '/new/bilogApp': { page: '/bilogApp' },
      '/new/contact': { page: '/contact' },
      '/new/success-calcagno': { page: '/success-calcagno' },
      '/new/success-ordono': { page: '/success-ordono' },
      '/new/laboratorio': { page: '/laboratorio' },
      '/new/odontologica': { page: '/odontologica' },
      '/new/utils': { page: '/utils' },
      '/new/versions-detail': { page: '/versions-detail' },
    }
  },
}