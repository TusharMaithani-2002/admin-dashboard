import React from 'react'
import Layout from '../../components/Layout'

function NewProduct() {
  return (
    <Layout>
        <h1>Add new Product</h1>
        <input type="text" placeholder='product name' />
        <textarea name="" id="" cols="30" rows="10" placeholder='description'></textarea>
    </Layout>
  )
}

export default NewProduct