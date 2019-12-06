import Item from './Item';

const Docs = ({title, item}) => (
  <section className="docs-section">
    <h1 className="docs-title">{title}</h1>
    <Item {...item} />
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .docs-section {
          box-sizing: border-box;
          padding-left: 30px;
        }
        .docs-title {
          font-size: 3rem;
          line-height: 1.1666em;
          letter-spacing: -0.066875rem;
          font-weight: 600;
          color: #000;
          margin: 10px 0 30px;
        }
      }
    `}
    </style>
  </section>
)

export default Docs;
