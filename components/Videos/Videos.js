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
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  )
}

export default GeneratedVideos
