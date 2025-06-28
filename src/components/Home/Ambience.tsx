// src/components/Home/Ambience.tsx
import React from "react";
import Carousel from "../common/Carousel";
import style from "@/css/Ambience.module.css";
import { EmblaOptionsType } from "embla-carousel";
import { CarouselItem } from "@/config/types";
import { useTranslation } from "react-i18next";

const ambienceItems: CarouselItem[] = [
  { id: 1, url: "/images/fixed-aspect-ratio-spacer.png" },
  { id: 2, url: "/images/fixed-aspect-ratio-spacer1.png" },
  { id: 3, url: "/images/fixed-aspect-ratio-spacer2.png" },
];

const chefRecommendItems = [
  {
    id: 1,
    title: "Beef tenderloin with green pepper sauce",
    description: "Lorem ipsum dolor sit amet consectetur. Neque rhoncus nunc id gravida ultrice...",
    price: "$385",
    image: "images/beef-tenderloin.png",
  },
  {
    id: 2,
    title: "Roasted Japanese scallops with cinnamon sticks",
    description: "Lorem ipsum dolor sit amet consectetur. Neque rhoncus nunc id gravida ultrice...",
    price: "$289",
    image: "images/japanese-scallops.png",
  },
  {
    id: 3,
    title: "Home-made cheese salad",
    description: "Lorem ipsum dolor sit amet consectetur. Neque rhoncus nunc id gravida ultrice...",
    price: "$180",
    image: "images/cheese-salad.png",
  },
  {
    id: 4,
    title: "Apple tart with vanilla ice-cream",
    description: "Lorem ipsum dolor sit amet consectetur. Neque rhoncus nunc id gravida ultrice...",
    price: "$160",
    image: "images/apple-tart.png",
  },
  {
    id: 5,
    title: "Grilled sandwich with salad",
    description: "Lorem ipsum dolor sit amet consectetur. Neque rhoncus nunc id gravida ultrice...",
    price: "$385",
    image: "images/grilled-sandwich.png",
  },
  {
    id: 6,
    title: "Pan-seared beef sandwich",
    description: "Lorem ipsum dolor sit amet consectetur. Neque rhoncus nunc id gravida ultrice...",
    price: "$289",
    image: "images/pan-seared-sandwich.png",
  },
  {
    id: 7,
    title: "Bolognese pasta with cheese",
    description: "Lorem ipsum dolor sit amet consectetur. Neque rhoncus nunc id gravida ultrice...",
    price: "$180",
    image: "images/bolognese-pasta.png",
  },
  {
    id: 8,
    title: "Grilled salmon with lime",
    description: "Lorem ipsum dolor sit amet consectetur. Neque rhoncus nunc id gravida ultrice...",
    price: "$160",
    image: "images/grilled-salmon.png",
  }
];


const OPTIONS: EmblaOptionsType = {};
const Ambience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="grid">
      <div className={style.bgRed}>
        <section
          className={style.ambience + " container mx-auto flex flex-col"}
        >
          <h2 className={style.header}>t('ambience')</h2>
          <p className={style.text}>
            Step into an intimate and refined setting where every detail is
            thoughtfully curated. With seating{" "}
            <span style={{ fontWeight: "700" }}> for up to 40 guests</span>,
            Le68 Bistro offers a serene, exclusive atmosphere — perfect for
            quiet dinners, business conversations, or special celebrations. From
            soft lighting and elegant table settings to warm, attentive service,
            every element is designed to elevate your fine-dining experience.
          </p>
          <Carousel slides={ambienceItems} options={OPTIONS} />
        </section>
      </div>

      <div className={style.bgRed} style={{ backgroundColor: "#881418" }}>
        <section
          className={style.cheft_recomment + " container mx-auto flex flex-col"}
        >
          <h2 className={style.ambience__title}>{t("cheft_recomment")}</h2>
          <div className={style.mid_table}>
            {/* Render 2 columns, each column 4 items */}
            {[0, 1].map(col => (
              <div key={col} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {chefRecommendItems.slice(col * 4, (col + 1) * 4).map(item => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                    <img src={item.image} alt={item.title} style={{ width: 140, height: 140, objectFit: 'cover', borderRadius: 8, marginRight: 32 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ color: '#FFF', fontFamily: 'The Silver Editorial', fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
                        {item.title}
                      </div>
                      <div style={{ color: '#FFF7EC', fontFamily: 'Source Serif 4', fontSize: 20, marginBottom: 8 }}>
                        {item.description}
                      </div>
                    </div>
                    <div style={{ color: '#FFF', fontFamily: 'The Silver Editorial', fontSize: 48, fontWeight: 400, marginLeft: 32, minWidth: 100, textAlign: 'right' }}>
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
export default Ambience;
