const Title = ({ text, paragraph }) => {
  return(
    <h1 className="title">
      {text}
      <style jsx>
      {`
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width: 750px) {
          .title {
            padding: 0;
            margin: 0;
            font-size: 26px;
            font-weight: 600;
          }
        }

        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
          .title {
            padding: 0;
            margin: 0;
            font-size: 42px;
            font-weight: 600;
          }
        }
      `}
      </style>
    </h1>
  )
}

export default Title