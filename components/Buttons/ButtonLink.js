import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonLink = ({buttonText, hrefAs, customClass, buttonHref}) => (
  <span className="button--container">
    <Link href={buttonHref} as={hrefAs}>
      <Button customClass={customClass}>
        {buttonText}
      </Button>
    </Link>
    <style jsx>
    {`
      {/* STYLES FOR DESKTOP */}
      @media only screen and (min-width: 751px) {
        .button--container {
          margin-right: 20px;
          display: inline-block;
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