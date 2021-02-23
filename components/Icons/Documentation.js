import React from 'react'
import PropTypes from 'prop-types'

const Documentation = ({ width, height, colorStroke, colorFill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path
            fill={colorFill}
            d={`M4 
            22v-20h16v11.543c0 
            4.107-6 
            2.457-6 
            2.457s1.518 
            6-2.638 
            6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 
            9.811-7.223 
            9.811-9.614zm-11.788-1.02c.463-1.469 
            1.341-3.229 
            1.496-3.675.225-.646-.173-.934-1.429.171l-.279-.525c1.432-1.559 
            4.382-1.91 3.379.504-.627 
            1.508-1.076 
            2.525-1.332 
            3.31-.374 
            1.144.57.68 
            1.494-.173.126.206.167.271.293.508-2.053 
            1.953-4.33 
            2.125-3.622-.12zm3.895-6.71c-.437.372-1.084.364-1.446-.018-.362-.382-.302-.992.135-1.364.437-.372 
            1.084-.363 
            1.446.018.361.382.302.992-.135 
            1.364z`}
        />
    </svg>
);

Documentation.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    colorStroke: PropTypes.string,
    colorFill: PropTypes.string,
};

Documentation.defaultProps = {
    width: 65,
    height: 65,
    colorStroke: '#666',
    colorFill: '#45ace1',
};

export default Documentation