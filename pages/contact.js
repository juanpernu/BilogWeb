import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import Form from '../components/Form/FormContainer';

const Contact = ({ query }) => (
  <Layout>
    <Cover
      text="¡Queremos conocerte!"
      paragraph="¿Preguntas o sugerencias? Nos encantaría escucharlas. Escribinos y te responderemos a la brevedad."
      hasButtons={false}
    />
    <Form prefetchedData={query} />
  </Layout>
)

Contact.getInitialProps = async ({ query }) => {
  return query ? { query } : null;
};

export default Contact;