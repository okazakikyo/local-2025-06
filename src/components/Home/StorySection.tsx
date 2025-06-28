import React from 'react';
import style from '@/css/StorySection.module.css';

const LEFT_IMAGES = ['/images/story1.png', '/images/story2.png', '/images/story3.png'];
const RIGHT_IMAGES = ['/images/story4.png', '/images/story5.png', '/images/story6.png'];

const StorySection: React.FC = () => (
    <section className={style.storySection}>
        <div className={ "container mx-auto flex flex-col lg:flex-row gap-10 px-4 md:px-8 justify-between " + style.bg}>

            {/* Left column */}
            <div className="flex flex-col gap-4 w-full max-w-[312px] lg:w-1/4 gap-6">
                {LEFT_IMAGES.map(src => (
                    <img key={src} src={src} alt="" className="w-full object-cover rounded"/>
                ))}
            </div>

            {/* Content column */}
            <div className="w-full lg:w-2/4 max-w-[424px] text-left flex flex-col self-stretch">
                <h2 className={style.storyTitle}>
                    “Where Every Meal Feels Like Home”
                </h2>
                <p className="text-[24px] text-[#404040] leading-normal font-[Source Serif 4] mb-6 pt-[40px]">
                    The artist of the French kitchen, not only cooking but also infusing each dish with the soul
                    of a symphony of flavours and emotions. Born in Lyon – the culinary capital of France – he
                    grew up amidst the aroma of melting butter, golden toasted bread, and the rich taste of
                    local cheese. With skilled hands and a heart full of passion, Pierre not only creates perfect
                    dishes but also tells stories through ingredients, offering diners experiences that transcend
                    taste – reaching into the deepest memories and emotions.
                </p>
                <p className="font-semibold text-black text-xl">Patrick Berenger</p>
                <p className="text-black pb-[40px] text-xl">/ Head Chef and founder at Le 68 Bistro & Café</p>

                <button
                    className="flex items-center justify-center px-6 py-4 gap-2 bg-[#8B0000] text-white border border-[#FBFBFB] hover:bg-[#A10000] transition uppercase tracking-wide">
                    Our Story
                </button>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4 w-full max-w-[312px] lg:w-1/4 gap-6">
                {RIGHT_IMAGES.map(src => (
                    <img key={src} src={src} alt="" className="w-full object-cover rounded"/>
                ))}
            </div>
        </div>
    </section>
);

export default StorySection;
