import NImage from 'next/image';

const Image = ({ src, alt}) => {
  return(
    <div className="image-container">
      <NImage
        src={src}
        alt={alt}
        width={335}
        height={400}
      />
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
              height: 280px;
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
            }
            :global(.feature-image.right .image-container img) {
              height: 400px;
              position: relative;
              right: 0;
            }
          }
        `}
        </style>
    </div>
  )
}

export default Image