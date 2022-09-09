import React from 'react';
import { Link} from 'react-router-dom';
import e_404 from '../utils/e_404.jpg'

const UnknownPage = () => {

  return (
    <div className='unknown-page'>
      <div>
        <div className="error-img">
            <img src={e_404} alt="Error 404 page not Found" />
        </div>
        <p>Page not Found <Link to='/'>GO BACK HOME</Link>.</p>
      </div>
    </div>
  )
}

export default UnknownPage;
