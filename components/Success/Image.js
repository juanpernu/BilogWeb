const SuccessImg = (props) => {
  const { imgBg, bgPosition } = props;
  return (
    <React.Fragment>
      <img className="success-img" style={{ backgroundImage: `url(${imgBg})`, backgroundPosition: bgPosition }} />
      <style jsx>
        {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .success-img {
            width: 100%;
            height: 350px;
            display: block;
            background-size: cover;
            background-position: center center;
          }
        }
      `}
      </style>
    </React.Fragment>
  )
}

export default SuccessImg;
