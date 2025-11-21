import React from 'react'

import img404 from '../../assets/page-404.jpg'
import './Page404.css'

import PageLayout from '../../components/page-layout/PageLayout'

const Page404 = () => {
  return (
    <PageLayout>
      <div className='page404 row'>
        <img src={img404}></img>

        <div className='text-big text-dark text-bold'>Error 404: Page not found (T^T) </div>
      </div>
    </PageLayout>
  )
}

export default Page404
