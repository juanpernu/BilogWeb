import Layout from '../components/Layout';
import Docs from '../components/Docs/Docs';
import termsAndConditions from '../mocks/termsAndConditions';

const TermsAndConditions = () => {
  const { section, copy, item } = termsAndConditions;

  return (
    <Layout>
      <div className="docs-wrapper">
        <Docs
          title={section}
          copy={copy}
          item={item}
        />
        <style jsx>
          {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .docs-wrapper{
              max-width:750px;
              font-size:14px;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .docs-wrapper {
              max-width: 1080px;
              margin: 0 auto 80px;
              padding-top: 120px;
            }
            .docs-section {
              height: 300px;
            }
          }
        `}
        </style>
      </div>
    </Layout>
  )
}

export default TermsAndConditions;
