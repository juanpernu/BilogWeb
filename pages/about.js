import Layout from '../components/Layout.js'
import Cover from '../components/Cover/Cover.js'

export default () => (
    <Layout>
      <Cover
        text="¡Queremos conocerte!"
        paragraph="¿Preguntas o sugerencias? Nos encantaría escucharlas. Escríbenos y te responderemos a la brevedad."
        buttons={true}
      />
    </Layout>
)
