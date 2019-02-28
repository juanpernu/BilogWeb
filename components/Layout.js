import Head from 'next/head'
import Header from './Header'

const Layout = ({children}) => (
  <div className="layout">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Seguí el estado de los proyectos de Ley." />
      <title>Bilog - Soluciones Informáticas</title>
    </Head>
    <Header />
    {children}
    <style jsx>
    {`
      @import url('https://fonts.googleapis.com/css?family=Nunito:300,600,800');
      :global(body) {
        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
      }
      :global(a.link--primary) {
        color: rgb(6, 125, 247);
        text-decoration: none;
        margin-bottom: 24px;
        display: inline-block;
      }
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
      }
    `}
    </style>
  </div>
)

export default Layout