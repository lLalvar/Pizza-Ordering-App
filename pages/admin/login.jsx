import styles from '../../styles/Login.module.css'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/loggedInSlice'

const Login = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(login(true))
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder='username'
          value='admin'
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='password'
          value='admin'
          type='password'
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href='/' passHref>
          <button className={styles.button} onClick={handleClick}>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Login
