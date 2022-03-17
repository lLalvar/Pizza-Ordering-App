import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const PizzaCard = ({ pizza }) => {
  const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn)

  return (
    <div className={styles.mainContainer}>
      <Link href={`/product/${pizza.id}`} passHref>
        <div>
          <Image src={pizza.img} alt='' width={500} height={500} priority />
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}>${pizza.prices[0]}</span>
          <p className={styles.desc}>{pizza.desc}</p>
        </div>
      </Link>
    </div>
  )
}

export default PizzaCard
