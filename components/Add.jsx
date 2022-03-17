import { useState } from 'react'
import styles from '../styles/Add.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza } from '../redux/pizzaListSlice'

const Add = ({ setClose }) => {
  const dispatch = useDispatch()
  const pizzaList = useSelector((state) => state.pizzaList)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [prices, setPrices] = useState([])
  const [extraOptions, setExtraOptions] = useState([])
  const [extra, setExtra] = useState(null)
  const img = '/img/pizza.png'

  const changePrice = (e, index) => {
    const currentPrices = prices
    currentPrices[index] = +e.target.value
    setPrices(currentPrices)
  }

  const handleExtraInput = (e) => {
    setExtra({
      ...extra,
      id: 1,
      [e.target.name]: e.target.value,
      price: +e.target.value || 1,
    })
  }
  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPizza({ id: '3', title, desc, img, prices, extraOptions }))
  }

  return (
    <div
      className={styles.container}
      data-close='true'
      onClick={(e) => {
        if (e.target.dataset.close === 'true') {
          setClose(true)
        }
      }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.wrapper}>
          <span onClick={() => setClose(true)} className={styles.close}>
            <Image src='/img/close.png' width={20} height={20} />
          </span>
          <h1 className={styles.title}>Add a new Pizza</h1>
          <div className={styles.item}>
            <label className={styles.label}>Title</label>
            <input
              required
              className={styles.input}
              type='text'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Desc</label>
            <textarea
              required
              rows={4}
              type='text'
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Prices</label>
            <div className={styles.priceContainer}>
              <input
                required
                className={`${styles.input} ${styles.inputSm}`}
                type='number'
                min={1}
                placeholder='Small'
                onChange={(e) => changePrice(e, 0)}
              />
              <input
                required
                className={`${styles.input} ${styles.inputSm}`}
                type='number'
                min={1}
                placeholder='Medium'
                onChange={(e) => changePrice(e, 1)}
              />
              <input
                required
                className={`${styles.input} ${styles.inputSm}`}
                type='number'
                min={1}
                placeholder='Large'
                onChange={(e) => changePrice(e, 2)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              Extra <span className={styles.extraText}>(optional)</span>
            </label>
            <div className={styles.extra}>
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type='text'
                placeholder='Item'
                name='text'
                onChange={handleExtraInput}
              />
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type='number'
                min={1}
                placeholder='Price'
                name='price'
                onChange={handleExtraInput}
              />
              <button
                type='button'
                className={styles.extraButton}
                onClick={handleExtra}
              >
                Add
              </button>
            </div>
            <div className={styles.extraItems}>
              {extraOptions.map((option) => (
                <span key={option.text} className={styles.extraItem}>
                  {option.text}
                </span>
              ))}
            </div>
          </div>
          <button type='submit' className={styles.addButton}>
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add
