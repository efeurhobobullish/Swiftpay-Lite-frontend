import { Link } from 'react-router-dom'
import styles from '../Styles/notfound.module.css'
import img from '../assets/lost.svg'
const NotFoundPage; = () => {
    document.title = "404: Page not found"
  return (
      <>
          <div className={styles.container}>
              <img src={img} height={230} alt="Not found svg" />
              <h1>404</h1>
              <br />
              <p>Hold on chief...✋ <br /> Empire Tech never cook this side yet!!!</p>

              <Link to="/dashboard">
                  <button className={styles.btn}>
                      <i className='fa-solid fa-arrow-left'></i> &nbsp; Go Back
                  </button>
              </Link>
      </div>
      </>
  )
}

export default NotFoundPage