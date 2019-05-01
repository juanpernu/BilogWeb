import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import Form from '../components/Form/FormContainer';

export default () => (
  <Layout>
    <Cover
      text="¡Queremos conocerte!"
      paragraph="¿Preguntas o sugerencias? Nos encantaría escucharlas. Escribinos y te responderemos a la brevedad."
      gradientBg="sea"
      hasButtons={false}
    />
    <Form/>
  </Layout>
)
