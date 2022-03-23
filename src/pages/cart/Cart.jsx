import React from 'react'
import { Footer, Navbar } from '../../components'
import CartItems from './CartItems'
import styles from "./Cart.module.css"

export function Cart() {
  return (
    <>
      <Navbar />
      <main className={`${styles.max__width__1200} mx-auto`}>
        <CartItems />
      </main>
      <Footer />
    </>
  )
}
