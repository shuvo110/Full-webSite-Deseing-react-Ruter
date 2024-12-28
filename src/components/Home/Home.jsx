import React from 'react'
import SectionOne from './SectionOne/SectionOne'
import Silider from '../Silider/Silider'
import Accorudine from './Accorudine/Accorudine'
import FullStackWebDeveloperWorinkCard from './FullStackWebDeveloperWorinkCard/FullStackWebDeveloperWorinkCard'
const Home = () => {
    return (
        <div>
            <Silider></Silider>
            <div className='md:flex items-center justify-center text-center lg:text-left'>
                <div className='lg:py-10 py-5'>
                    <h1 className='lg:w-[400px] md:text-2xl lg:text-4xl font-bold text-red-600'>Discover and Find Your Own Fashion!</h1>
                    <p className='lg:w-[300px] my-7 text-lg'>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_14yAwskliwGXY6_PHhNgdFHMe3BUPM__Vz5qnAugeu0jn3CGFSNJhV9CrI1BgIloLDI&usqp=CAU" alt=""/>
                </div>
            </div>
            <SectionOne> </SectionOne>
            <Accorudine></Accorudine>
            <FullStackWebDeveloperWorinkCard></FullStackWebDeveloperWorinkCard>
        </div>
        
    )
}
export default Home