import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { useState } from 'react'
import { login } from '../redux/loggedInSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const quantity = useSelector((state) => state.cart.quantity)
  const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn)

  const handleClick = () => {
    dispatch(login(!isLoggedIn))
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <Link href='/' passHref>
          <div className={styles.item}>
            <div className={styles.callButton}>
              <Image src='/img/telephone.png' alt='' width='32' height='32' />
            </div>
            <div className={styles.texts}>
              <div className={styles.text}>ORDER NOW!</div>
              <div className={styles.text}>123 456 789</div>
            </div>
          </div>
        </Link>
        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href='/' passHref>
              <li className={styles.listItem}>Homepage</li>
            </Link>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          {!isLoggedIn ? (
            <Link href='/admin/login' passHref>
              <button className={styles.btn}>Login Admin</button>
            </Link>
          ) : (
            <Link href='/' passHref>
              <button onClick={handleClick} className={styles.btn}>
                Logout Admin
              </button>
            </Link>
          )}
          <div className={styles.hamburgerMenu}>
            <div
              className={
                !open
                  ? `${styles.hamburgerIconWrapper}`
                  : `${styles.hamburgerIconWrapper} ${styles.active}`
              }
              onClick={() => setOpen(!open)}
            >
              <div className={styles.hamburgerIcon}>
                <Image src='/img/open.png' alt='' layout='fill' />
              </div>
            </div>

            <div
              className={
                !open
                  ? `${styles.hamburgerIconWrapper} ${styles.active}`
                  : `${styles.hamburgerIconWrapper}`
              }
              onClick={() => setOpen(!open)}
            >
              <div className={styles.hamburgerIcon}>
                <Image src='/img/close.png' alt='' layout='fill' />
              </div>
            </div>

            <ul
              className={
                open
                  ? `${styles.hamburgerList} ${styles.open}`
                  : `${styles.hamburgerList} `
              }
            >
              <Link href='/' passHref>
                <li
                  className={styles.hamburgerListItem}
                  onClick={() => setOpen(!open)}
                >
                  Homepage
                </li>
              </Link>
              <li className={styles.hamburgerListItem}>Products</li>
              <li className={styles.hamburgerListItem}>Menu</li>
              <li className={styles.hamburgerListItem}>Blog</li>
              <li className={styles.hamburgerListItem}>Contact</li>
              <li className={styles.hamburgerListItem}>
                {!isLoggedIn ? (
                  <Link href='/admin/login' passHref>
                    <button
                      className={styles.hamburgerBtn}
                      onClick={() => {
                        setOpen(!open)
                      }}
                    >
                      Login Admin
                    </button>
                  </Link>
                ) : (
                  <Link href='/' passHref>
                    <button
                      className={styles.hamburgerBtn}
                      onClick={() => {
                        handleClick()
                        setOpen(!open)
                      }}
                    >
                      Logout Admin
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          {/* {!isLoggedIn && ( */}
          <Link href='/cart' passHref>
            <div className={styles.cart}>
              <Image src='/img/cart.png' alt='' width='30' height='30' />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
