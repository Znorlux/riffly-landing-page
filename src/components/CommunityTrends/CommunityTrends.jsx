import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import "./CommunityTrends.css";

gsap.registerPlugin(SplitType);

const communityData = [
  {
    img: "/community-trends/img1.jpeg",
    name: "Carolina",
    creation:
      '"Sunset Groove" - Un beat chillhop que está arrasando en la comunidad.',
    link: "/trending/sunset-groove",
  },
  {
    img: "/community-trends/img3.jpeg",
    name: "Ana",
    creation: '"Dreams in Motion" - Electrónica experimental con IA.',
    link: "/trending/dreams-in-motion",
  },
  {
    img: "/community-trends/img2.jpeg",
    name: "Penelope",
    creation:
      '"Voces del Futuro" - Fusión vocal creada con inteligencia artificial.',
    link: "/trending/voces-del-futuro",
  },
];

const CommunityTrends = () => {
  const imagesContainerRef = useRef(null);
  const imagesRef = useRef([]);
  const namesRef = useRef([]);

  useLayoutEffect(() => {
    // Split text into letters
    const splitInstances = namesRef.current.map((el) => {
      if (el) {
        const split = new SplitType(el, { types: "chars" });
        split.chars.forEach((char) => {
          char.classList.add("letter");
        });
        return split;
      }
      return null;
    });

    const nameElements = namesRef.current;
    const defaultLetters = nameElements[0]?.querySelectorAll(".letter") || [];
    gsap.set(defaultLetters, { y: "100%" });

    const listeners = [];

    if (window.innerWidth >= 900) {
      imagesRef.current.forEach((img, index) => {
        const correspondingName = nameElements[index];
        if (!img || !correspondingName) return;
        const letters = correspondingName.querySelectorAll(".letter");

        const mouseEnterImg = () => {
          gsap.to(img, {
            width: 210,
            height: 210,
            duration: 0.5,
            ease: "power4.out",
          });
          gsap.to(letters, {
            y: "-100%",
            ease: "power4.out",
            duration: 0.75,
            stagger: {
              each: 0.025,
              from: "center",
            },
          });
        };
        const mouseLeaveImg = () => {
          gsap.to(img, {
            width: 170,
            height: 170,
            duration: 0.5,
            ease: "power4.out",
          });
          gsap.to(letters, {
            y: "0%",
            ease: "power4.out",
            duration: 0.75,
            stagger: {
              each: 0.025,
              from: "center",
            },
          });
        };
        img.addEventListener("mouseenter", mouseEnterImg);
        img.addEventListener("mouseleave", mouseLeaveImg);
        listeners.push(() => {
          img.removeEventListener("mouseenter", mouseEnterImg);
          img.removeEventListener("mouseleave", mouseLeaveImg);
        });
      });

      const imagesContainer = imagesContainerRef.current;
      if (imagesContainer) {
        const mouseEnterContainer = () => {
          gsap.to(defaultLetters, {
            y: "0%",
            ease: "power4.out",
            duration: 0.75,
            stagger: {
              each: 0.025,
              from: "center",
            },
          });
        };
        const mouseLeaveContainer = () => {
          gsap.to(defaultLetters, {
            y: "100%",
            ease: "power4.out",
            duration: 0.75,
            stagger: {
              each: 0.025,
              from: "center",
            },
          });
        };
        imagesContainer.addEventListener("mouseenter", mouseEnterContainer);
        imagesContainer.addEventListener("mouseleave", mouseLeaveContainer);
        listeners.push(() => {
          imagesContainer.removeEventListener(
            "mouseenter",
            mouseEnterContainer
          );
          imagesContainer.removeEventListener(
            "mouseleave",
            mouseLeaveContainer
          );
        });
      }
    }

    // Cleanup
    return () => {
      listeners.forEach((off) => off());
      splitInstances.forEach((split) => split && split.revert());
    };
  }, []);

  return (
    <section className="team team-transparent">
      <div className="profile-images" ref={imagesContainerRef}>
        {communityData.map((user, idx) => (
          <div
            className="img"
            key={user.img}
            ref={(el) => (imagesRef.current[idx] = el)}
          >
            <img src={user.img} alt={user.name} />
          </div>
        ))}
      </div>
      <div className="profile-names">
        {communityData.map((user, idx) => (
          <div className="name" key={user.name}>
            <h1 ref={(el) => (namesRef.current[idx] = el)}>{user.name}</h1>
            <p style={{ color: "black" }}>Hola</p>
            <div className="creation-info">
              <p>{user.creation}</p>
              <a href={user.link} className="listen-link">
                Escuchar ahora
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityTrends;
