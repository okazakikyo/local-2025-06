// src/components/Hero/Hero.tsx
import React from 'react';
import style from '@/css/Hero.module.css';

const Hero: React.FC = () => (
    <section className={style.hero}>
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center min-h-screen">
            <h1 className={"text-white text-[48px] text-center font-normal leading-normal capitalize " + style.font_silver}>
                The Taste of France – Crafted with Passion
            </h1>

            <p className="text-white sm:text-base md:text-[24px] italic mt-4 opacity-90 max-w-xl pb-[40px]">
                Saveurs de France – Façonnées par la passion
            </p>

            <button className={style.reservation_button }>
                Reservation
            </button>
        </div>
    </section>
);

export default Hero;
