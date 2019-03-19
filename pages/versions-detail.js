import Layout from '../components/Layout'
import VersionsExtended from '../components/Version/VersionsExtended'
import BannerCta from '../components/BannerCta'

export default () => (
    <Layout>
      <VersionsExtended />
      <BannerCta
        title="¿Qué estas esperando para probar Bilog?"
        buttonText="Descargar demo"
      />
    </Layout>
)
