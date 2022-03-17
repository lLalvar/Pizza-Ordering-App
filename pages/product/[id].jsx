import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { addProduct } from '../../redux/cartSlice'

const Product = () => {
  const dispatch = useDispatch()
  const routerId = useRouter().query.id
  const pizzaList = useSelector(
    (state) => state.pizzaList.filter((pizza) => pizza.id === routerId)[0]
  )
  const pizzaList1 = useSelector((state) => state.pizzaList)
  const [pizza, setPizza] = useState({})
  const [loading, setLoading] = useState(true)
  const [price, setPrice] = useState(0)
  const [extraOptions, setExtraOptions] = useState([])
  const [quantity, setQuantity] = useState(1)
  const extraOption = extraOptions
    .map((extra) => extra.price)
    .reduce((acc, curr) => acc + curr, 0)

  useEffect(() => {
    if (routerId) {
      setLoading(false)
      setPizza(pizzaList)
      setPrice(pizzaList.prices[0])
    }
  }, [routerId])

  const handleExtras = (e, option) => {
    const checked = e.target.checked
    // console.log(e.target)
    if (checked) {
      setPrice(price + option.price)
      setExtraOptions([
        ...extraOptions,
        { id: option.id, text: option.text, price: option.price },
      ])
    } else {
      setPrice(price - option.price)
      setExtraOptions(extraOptions.filter((item) => item.id !== option.id))
    }
  }

  const handleClick = () => {
    dispatch(addProduct([pizza, { quantity, price, extraOptions }]))
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            layout='fill'
            alt='pizza'
            objectFit='contain'
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div
            className={styles.size}
            onClick={() => setPrice(pizza.prices[0] + extraOption)}
          >
            <Image src='/img/size.png' alt=' size' layout='fill' />
            <span className={styles.number}>Small</span>
          </div>
          <div
            className={styles.size}
            onClick={() => setPrice(pizza.prices[1] + extraOption)}
          >
            <Image src='/img/size.png' alt=' size' layout='fill' />
            <span className={styles.number}>Medium</span>
          </div>
          <div
            className={styles.size}
            onClick={() => setPrice(pizza.prices[2] + extraOption)}
          >
            <Image src='/img/size.png' alt=' size' layout='fill' />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option, index) => (
            <div className={styles.option} key={option.id}>
              <input
                type='checkbox'
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onClick={(e) => handleExtras(e, option)}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            type='number'
            defaultValue={1}
            min={1}
            className={styles.quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
