import Layout from '../components/Layout'

const bgImg = [
  'https://scontent.faep22-1.fna.fbcdn.net/v/t31.0-8/10904511_865635450162553_3547655712566753588_o.jpg?_nc_cat=109&_nc_sid=cdbe9c&_nc_ohc=JlKmy96zE3cAX8Y8bYz&_nc_ht=scontent.faep22-1.fna&oh=cf2be80ed25d530c7a9dd24fd4b7c142&oe=5EFCA6C4',
  'https://scontent.faep22-1.fna.fbcdn.net/v/t1.0-9/13165927_1084562101603219_4152108512836627685_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_ohc=EwfC7d8BGngAX-lyGNH&_nc_ht=scontent.faep22-1.fna&oh=8daf54eef26da1e54870f330c6bda759&oe=5EFE757A'
]

export default () => (
  <Layout>
    <section className="success-container">
      <h2 className="success-container--title">Trayectoria, motivación y buena comunicación, la fórmula del éxito de Espacio Dental</h2>
      <img className="success-img" style={{ backgroundImage: `url(${bgImg[0]})`}} />
      <p className="success-container--text">
        Hablamos con una de nuestras más fieles usuarias, que nosotros consideramos una increíble compañera de trabajo. Les queremos contar  el caso de <b>Liliana Calcano, odontóloga con una gran trayectoria de más de 41 años</b>, especializada en la atención de pacientes con discapacidad haciendo foco, sobre todo, en los niños. Hoy, ya hace más de 5 años, trabaja en conjunto con su hijo Mauro Martinelli.
      </p>
      <p className="success-container--text">
        Cuando empezamos a diseñar la implementación de Bilog en su consultorio, lo primero que tratamos de entender fue la problemática más importante que quería resolver. Junto a ella identificamos que <i>“no había un seguimiento en los turnos de los pacientes”</i> y esto se <b>impactaba directamente en el ausentismo de los pacientes.</b> Por eso se decidió desarrollar una estrategia integral que, como ella nos dijo, <i>“ayudó a minimizar el ausentismo gracias a los recordatorios y mejoró la optimización de los recursos”</i>.
      </p>
      <p className="success-container--text">Le preguntamos qué significa, para ella, Bilog en relación con su trabajo diario y, citando, nos dice: <i>“La mano derecha”.</i></p>
      <img className="success-img" style={{ backgroundImage: `url(${bgImg[1]})` }} />
      <p className="success-container--text">Nuestro objetivo como compañía es ayudar a nuestros usuarios, como Liliana, a potenciar y facilitar el trabajo diario, optimizando las tareas y los tiempos dentro de los consultorios o clínicas donde está nuestros software. Por eso recurrimos a los testimonios de nuestros usuarios, y les pedimos que les cuenten a sus colegas cómo Bilog los ayuda en su día a día. Esto fue lo que dijo Liliana:</p>
      <p className="success-container--text">
        <b>- ¿Qué le dirías a un colega que está pensando en implementar Bilog, o que todavía no lo hizo?</b> <br></br>
        <i>- ¡Que no dude en realizar la inversión! De hecho, lo he recomendado también a no odontólogos, por lo bueno del sistema, su seriedad y calidez.</i>
      </p>
      <p className="success-container--text cta">Vos también podes mejorar tu negocio, retener clientes e incrementar tus ganancias. Nuestro equipo te acompaña en todo el trayecto, basándose en tus necesidades y objetivos. <a href="/contact">¡Contactanos!</a></p>
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
        .success-img {
          width: 100%;
          height: 350px;
          display: block;
          background-size: cover;
          background-position: center center;
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