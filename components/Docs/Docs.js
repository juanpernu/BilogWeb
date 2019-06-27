const Docs = () => (
  <section className="docs-section">
    <h1>Title from documentation</h1>
    <p>Acá va el texto de la documentación que explica de que va esta sección.</p>
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .sidebar,
        .docs-section {
          height: 300px;
        }
        .docs-section {
          background-color: green;
          box-sizing: border-box;
          padding-left: 30px;
        }
      }
    `}
    </style>
  </section>
)

export default Docs;
