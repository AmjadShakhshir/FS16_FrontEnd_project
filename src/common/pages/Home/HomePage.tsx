import React from 'react'

// import Categories from '../../components/Categories/Categories'
// import Contact from '../../components/Contact/Contact'
// import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../../features/products/components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div className='home'>
        <Slider/>
        <FeaturedProducts type="trending"/>
        <Categories />
        <FeaturedProducts type="featured"/>
        <Contact />
        </div>
    )
}

export default Home