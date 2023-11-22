import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import ProductGrid from '../components/ProductGrid'

const StoreDashboard = () => {
  return (
    <div className="w-full h-full">
        <Header/>
        <ProductGrid/>
    </div>
  )
}

export default StoreDashboard