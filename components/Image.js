const Image = ({ src, alt}) => {
  return(
    <div className="image-container">
      <img src={src} alt={alt} />
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .image-container {
              margin-bottom: 52px;
              display: flex;
              flex-direction: column;
            }
            .image-container img {
              height: 200px;
              margin: 0 auto;
              vertical-align: middle;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .image-container {
              width: 50%;
            }
            .image-container img {
              height: 400px;
              position: relative;
              right: 100px;
            }
          }
        `}
        </style>
    </div>
  )
}

export default Image