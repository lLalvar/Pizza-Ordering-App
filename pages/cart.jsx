import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const Cart = () => {
  const carts = useSelector((state) => state.cart)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {carts.products.map((product) => (
              <tr className={styles.tr} key={product[0].id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product[0].img}
                      layout='fill'
                      objectFit='cover'
                      alt='pizza'
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product[0].title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product[1].extraOptions.map((extra) => (
                      <span key={extra.id}>{extra.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product[1].price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product[1].quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product[1].price * product[1].quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${carts.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${carts.total}
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
