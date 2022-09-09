import React from 'react';
import { Link} from 'react-router-dom';
import disconnected from '../utils/disconnected.png'

const InternetErr = () => {

  return (
    <div className='unknown-page'>
      <div>
        <div className="error-img">
            <img src={disconnected} alt="Error 404 page not Found" />
        </div>
        <p>No Internet Connection.</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    </div>
  )
}

export default InternetErr;