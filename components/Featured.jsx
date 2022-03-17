import styles from '../styles/Featured.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Featured = () => {
  const [index, setIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === 'right') {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    if (direction === 'left') {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }

  const images = [
    {
      src: '/img/featured1.png',
      title: (
        <div className={styles.title1}>
          <h3>HOT & SPICY</h3>
          <h2>PIZZA</h2>
          <div className={styles.underline}></div>
          <h4>50% OFF</h4>
          <h5>ORDER NOW</h5>
        </div>
      ),
      styles: {
        flexDirection: 'row',
        opacity: index === 0 ? 1 : 0,
        transform: `translate(${index > 0 ? '-150%' : '-50%'}, -50%)`,
      },
    },
    {
      src: '/img/featured2.png',
      title: (
        <div className={styles.title2}>
          <h3>BEST</h3>
          <h3>HOMEMADE</h3>
          <h2>PIZZA</h2>
          <h3>IS HERE!</h3>
        </div>
      ),
      styles: {
        flexDirection: 'row-reverse',
        opacity: index === 1 ? 1 : 0,
        transform: `translate(${
          index === 1 ? '-50%' : index === 2 ? '-150%' : '50%'
        }, -50%)`,
      },
    },
    {
      src: '/img/featured3.png',
      title: (
        <div className={styles.title3}>
          <h2>BUY 2</h2>
          <h2>GET 3</h2>
        </div>
      ),
      styles: {
        flexDirection: 'row-reverse',
        opacity: index === 2 ? 1 : 0,
        transform: `translate(${index > 1 ? '-50%' : '150%'}, -50%)`,
      },
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.wrapper}>
          {images.map((img, i) => (
            <div
              className={styles.featuredContainer}
              key={i}
              style={img.styles}
            >
              {img.title}
              <div>
                <Image
                  src={img.src}
                  alt=''
                  width={600}
                  height={600}
                  objectFit='fill'
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className={styles.arrowContainerLeft}
          onClick={() => handleClick('right')}
        >
          <Image
            src='/img/arrowl.png'
            alt=''
            width={120}
            height={120}
            objectFit='contain'
          />
        </div>
        <div
          className={styles.arrowContainerRight}
          onClick={() => handleClick('left')}
        >
          <Image
            src='/img/arrowr.png'
            alt=''
            width={120}
            height={120}
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Featured
