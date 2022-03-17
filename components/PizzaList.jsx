import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'
import { useSelector } from 'react-redux'
import AddButton from './AddButton'
import { useState } from 'react'
import Add from '../components/Add'
import Link from 'next/link'

const PizzaList = () => {
  const pizzaList = useSelector((state) => state.pizzaList)
  const [close, setClose] = useState(true)
  const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn)

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        {isLoggedIn && (
          <div className={styles.btnWrapper}>
            <AddButton setClose={setClose} />
            <Link href='/admin' passHref>
              <button className={styles.adminPanelBtn}>Admin Panel</button>
            </Link>
          </div>
        )}
        {!close && <Add setClose={setClose} />}
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
          aliquid earum. Doloribus officiis iusto tempora sapiente harum,
          placeat esse quidem ipsam necessitatibus officia voluptatibus, magni
          suscipit! Ipsum impedit laboriosam eaque?
        </p>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PizzaList
