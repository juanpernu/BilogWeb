import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({ width, height, colorStroke, colorFill }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path
            fill={colorFill}
            d={`M11.99 
            0l-11.99 
            8.723v15.277h24v-15.277l-12.01-8.723zm.001 
            2.472l9.793 
            7.113-6.735 
            4.588-3.049-2.47-3.049 
            2.471-6.737-4.589 
            9.777-7.113zm-9.991 
            9.386l5.329 3.63-5.329 
            4.318v-7.948zm.474 
            10.142l9.526-7.723 
            9.526 
            7.723h-19.052zm19.526-2.194l-5.329-4.317 
            5.329-3.631v7.948z`}
        />
    </svg>
);

Contact.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    colorStroke: PropTypes.string,
    colorFill: PropTypes.string,
};

Contact.defaultProps = {
    width: 36,
    height: 36,
    colorStroke: '#666',
    colorFill: '#45ace1',
};

export default Contact
