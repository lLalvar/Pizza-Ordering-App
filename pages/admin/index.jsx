import Image from 'next/image'
import styles from '../../styles/Admin.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, resetProduct } from '../../redux/cartSlice'

const Index = () => {
  const dispatch = useDispatch()
  const pizzaList = useSelector((state) => state.cart.products)

  const handleDelete = (product) => {
    const newList = pizzaList
      .map((pizza) => pizza[0])
      .filter((item) => item.id !== product.id)
    // dispatch(resetProduct())
    console.log(resetProduct)
    // dispatch(addProduct({}))
    // console.log(newList)
    // console.log(pizzaList)
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Products</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th></th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            {pizzaList
              .map((pizza) => pizza[0])
              .map((product) => (
                <tbody key={product.id}>
                  <tr className={styles.trTitle}>
                    <td>
                      <Image
                        src='/img/pizza.png'
                        width={50}
                        height={50}
                        objectFit='cover'
                        alt=''
                      />
                    </td>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>${product.prices[0]}</td>
                    <td>
                      <button
                        className={styles.button}
                        onClick={() => handleDelete(product)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
        {/* <div className={styles.item}>
          <h1 className={styles.title}>Orders</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tbody>
            {orderList.map((order) => (
              <tbody key={order.id}>
                <tr className={styles.trTitle}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>
                    {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                  </td>
                  <td>{status[order.status]}</td>
                  <td>
                    <button className={styles.nextStageBtn}>Next Stage</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div> */}
      </div>
    </div>
  )
}

export default Index
