import Sidebar from './Sidebar';
import Docs from './Docs';

const DocsWrapper = () => (
  <div className="docs-wrapper">
    <Sidebar/>
    <Docs/>
    <style jsx>
    {`
      {/* STYLES FOR MOBILE */}
      @media only screen and (max-width: 750px) {
      }

      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .docs-wrapper {
          max-width: 1024px;
          margin: 0 auto;
          padding-top: 86px;
          display: grid;
          grid-template-columns: 1fr 3fr;
        }
        .sidebar,
        .docs-section {
          height: 300px;
        }
        .sidebar {
          background-color: red;
        }
        .docs-section {
          background-color: green;
        }
      }
    `}
    </style>
  </div>
)

export default DocsWrapper;
