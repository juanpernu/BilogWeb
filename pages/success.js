import Layout from '../components/Layout'

export default () => (
  <Layout>
    <section className="success-container">
      <h2 className="success-container--title">Caso de éxito: Clínica Troyano</h2>
      <img src="https://www.wifers.com/images/blog/blog_59.png" />
      <p className="success-container--text">El <b>Dr. Eduardo Troyano</b> es un odontólogo reconocido a nivel mundial, ha dado cursos y charlas a nivel global sobre temáticas cómo falopa y más falopa. Su éxito no solo se puede contar si no que se hace tangible viendo <b>su clínica, una de las más grandes del país, fundada en 1880.</b></p>
      <p className="success-container--text">Según Eduardo, uno de los principales problemas que tenían era el de organizar y sacar estadísticas sobre el presentismo en su clínica ya que esto se traducía en costos y no se que mierda más poner. A partir de esa necesidad de negocio tomaron la desición de implementar una herramienta que los ayeude a ordenar sus finanzas y optimizar los tiempos de la clínica para mejorar la experiencia y el vinculo con sus pacientes.</p>
      <img src="https://www.wifers.com/images/blog/blog_59.png" />
      <p className="success-container--text">Para lograrlo, trabajaron en conjunto con el equipo de Bilog implementando el software de Gestión Odontológica en toda la clínica con más de veinte computadoras trabajando en sincronía y manteniendo seguros todos sus datos con las bases de datos en la nube que proporciona Bilog.</p>
      <p className="success-container--text">A partir de la implementación del Software de Gestión Odontológica de Bilog, la clínica aumento su facturación y optimizó sus tiempos en un 30%. La clave está en el manejo de todos los datos de la clínica a través de un software que está siempre conectado y brinda la posibilidad de
      acceder a los datos de la clínica en cualquier momento desde cualquier lugar.</p>
      <p className="success-container--text cta">Vos también podes mejorar tu negocio, retener clientes e incrementar tus ganancias. Nuestro equipo te acompaña en todo el trayect, basándose en tus necesidades y objetivos. <a href="/contact">¡Contactanos!</a></p>
    </section>
    <style jsx>
      {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .success-container {
          color: #505656;
          max-width: 1024px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          padding-top: 86px;
        }
        .success-container--title {
          margin: 0;
          padding: 50px 0 25px;
          font-size: 32px;
        }
        .success-container--text {
          font-size: 16px;
          padding: 0;
          line-height: 1.75;
          margin-bottom: 30px;
        }
        .success-container--text.cta {
          color: #000;
          font-weight: 600;
        }
        .success-container--text.cta a {
          color: #0090ff;
          text-decoration: none;
          transition: 0.3s ease;
        }
      }
    `}
    </style>
  </Layout>
)