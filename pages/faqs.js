import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import Accordion from '../components/Faq';

import { faqs } from "../mocks/faqs";

export default () => (
  <Layout>
    <Cover
      text="Preguntas frecuentes"
      paragraph="Te dejamos a mano las preguntas más frecuentes con sus respectivas respuestas. En caso de no encontrar la pregunta o respuesta que estás buscando, no dudes en llamarnos!"
      hasButtons={false}
    />
    <Accordion data={faqs} />
  </Layout>
);