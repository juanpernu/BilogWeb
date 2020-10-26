import SuccessImg from '../Success/Image';
import ButtonLink from '../Buttons/ButtonLink';

const Case = props => {
  const { cases } = props;
  return cases.map(c => {
    return (
      <div className="success-case">
        <SuccessImg imgBg={c.cover.src} bgPosition={c.cover.position} />
        <p className="success-case_copy">Caso de {c.case}</p>
        <h2 className="success-case_title">{c.title}</h2>
        <p>{c.preview}</p>
        <ButtonLink
          customClass="terciary"
          buttonHref={c.href}
          buttonText="Leer más"
        />
        {!c.no_divider && <div className="success-case_divider" />}
        <style jsx>
          {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .success-case_copy {
              font-size: 16px;
              color: #999;
            }
            .success-case_title {
              font-size: 24px;
            }
            .success-case_divider {
              width: 100%;
              height: 1px;
              background-color: #ddd;
              margin: 50px 0 30px;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .success-case_copy {
              font-size: 16px;
              color: #999;
            }
            .success-case_title {
              font-size: 32px;
            }
            .success-case_divider {
              width: 100%;
              height: 1px;
              background-color: #ddd;
              margin: 50px 0 30px;
            }
          }
        `}
        </style>
      </div>
    )
  })
};

export default Case;
