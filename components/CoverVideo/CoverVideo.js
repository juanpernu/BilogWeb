import React from 'react'

const CoverVideo = ({text, copy, src}) => {
  return(
    <div className="cover-video">
        <h2 className="title">{text}</h2>
        <p className="copy">{copy}</p>
        <div className="container-video">
            <iframe
            className="video"
            width="90%"
            height="405"
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
            </iframe>
        </div>
        <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .cover-video{
                padding:0;
                margin:0;
            }
            .title{
                font-size:14px;
                text-align:center;
                font-weight:500;
            }
            .copy{
                font-size:18px;
                text-align:center;
                padding: 0 25px;
            }
            .container-video{
                width:85%;
                position:relative;
                margin-left:auto;
                margin-right:auto;
            }
            .container-video::after{
                content:'';
                display:block;
                width:100%;
                padding-bottom: 56.25%;
            }
            .video{
                width:100%;
                height:100%;
                position:absolute;
                top:0;
                left:0;
            }
          }
          {/* STYLES FOR DESKTOP*/}
          @media only screen and (min-width: 751px){
            .cover-video{
                padding:0;
                margin:0;
            }
            .title{
                font-size:20px;
                text-align:center;
                font-weight:500;
            }
            .copy{
                font-size:26px;
                text-align:center;
                padding:0 13rem;
            }
            .container-video{
                width:70%;
                position:relative;
                margin-left:auto;
                margin-right:auto;
            }
            .container-video::after{
                content:'';
                display:block;
                width:100%;
                padding-bottom: 56.25%;
            }
            .video{
                width:100%;
                height:100%;
                position:absolute;
                top:0;
                left:0;
            }
          }
        `}
        </style>
    </div>
  )
}

export default CoverVideo