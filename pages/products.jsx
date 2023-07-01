import React from 'react'
import Layout from '../components/Layout'
import  Link from 'next/link'

function Products() {
  return (
    <Layout>
        <Link href="/products/new"
        className='bg-[#e76f0d] p-2 rounded-xl text-blue-900'
        >Add prodcut</Link>
    </Layout>
  )
}

export default Products