/** React dependencies */
import React from 'react'

const videos = {
  intro: 'https://www.youtube.com/embed/c98oEfmindU',
};

const GeneratedVideos = ({type}) => {
  return(
    <iframe
      width="720"
      height="405"
      src={videos[type]}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
      allowFullScreen>
    </iframe>
  )
}

export default GeneratedVideos
