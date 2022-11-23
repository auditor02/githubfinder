import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="h1 text-8xl font-bold mb-8">
            Oops!
          </h1>
          <p className="text-5xl mb-6 ">
            404 - Page Not Found!
            <Link to='/' className="btn btn-primary btn-lg mt-6">
              <FaHome  className='mr-2'/>
                Back To Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
