import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonLink = ({ buttonText, hrefAs, customClass, buttonHref, fullWidth}) => (
  <span className={`button--container ${fullWidth ? 'full-width' : ''}`}>
    <Link href={buttonHref} as={hrefAs}>
      <Button customClass={customClass}>
        {buttonText}
      </Button>
    </Link>
    <style jsx>
    {`
      {/* STYLES FOR DESKTOP */}
      @media screen and (min-width: 751px) {
        .button--container {
          margin-right: 20px;
          display: inline-block;
        }
        .button--container.full-width {
          margin: 0;
          width: 100%;
        }
      }
    `}
    </style>
  </span>
)

ButtonLink.propTypes = {
  buttonHref: PropTypes.string,
}

ButtonLink.defaultProps = {
  buttonHref: '#',
}

export default ButtonLink