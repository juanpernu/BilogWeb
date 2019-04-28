import Head from 'next/head';
import Header from './Header';
import Footer from './Footer/Footer';

const Layout = ({children}) => (
  <div className="layout">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Bilog Soluciones Informáticas. El nuevo software para la administración del consultorio y/o clínica Odontológica." />
      <meta name="HandheldFriendly" content="True" />
      <title>Bilog - Soluciones Informáticas</title>
      <link rel="shortcut icon" href="http://bilog.com.ar/App_Site/images/fav.png" />
      <link rel="canonical" href="http://www.bilog.com.ar" />
      <script src="https://www.google.com/recaptcha/api.js" async defer />
    </Head>
    <Header />
    {children}
    <Footer />
    <style jsx>
    {`
      @import url('https://fonts.googleapis.com/css?family=Nunito:300,600,800');
      :global(body) {
        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        box-sizing: border-box;
      }
      :global(::placeholder) {
        color: #bbb;
        opacity: 1; /* Firefox */
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