import React from 'react';
import image from '../bgImage.jpg';

export default function Home() {
    return (
        <main>
            <img src={image} alt="Lofoten beach sundown" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold leading-none lg:leading-snug hero-title">I AM</h1>
                <h2 className="absolute text-2xl text-green-100 font-bold leading-none lg:leading-snug ">Andreas Marius Steffensen</h2>
            </section>
        </main>
    )
}