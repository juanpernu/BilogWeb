import SuccessImg from '../Success/Image';
import ButtonLink from '../Buttons/ButtonLink';

import styles from './index.module.scss';

const Case = props => {
  const { cases } = props;
  return cases.map(c => {
    return (
      <div className={styles["success-case"]}>
        <SuccessImg imgBg={c.cover.src} bgPosition={c.cover.position} />
        <p className={styles["success-case_copy"]}>Caso de {c.case}</p>
        <h2 className={styles["success-case_title"]}>{c.title}</h2>
        <p>{c.preview}</p>
        <ButtonLink
          customClass="terciary"
          buttonHref={c.href}
          buttonText="Leer más"
        />
        {!c.no_divider && <div className={styles["success-case_divider"]} />}
      </div>
    )
  })
};

export default Case;
