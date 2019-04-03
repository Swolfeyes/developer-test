import React from 'react';
import PropTypes from 'prop-types';

const ErrorComp = ({ onButtonClick, message }) => {
  return (
    <div className='level notification is-danger'>
      <p className='level-left'>{`${message}`}</p>
      <button 
        className='level-right button notification__button' 
        onClick={onButtonClick}>
        <span>Refresh</span>
      </button>
    </div>
  )
}

ErrorComp.propTypes = {
  onButtonClick: PropTypes.func,
  message: PropTypes.string,
}

export default ErrorComp;