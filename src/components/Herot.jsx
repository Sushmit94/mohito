import React, { useRef } from 'react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from 'react-responsive';

const Herot = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const heroSplit = new SplitText('.title', { type: 'chars,words' });
      const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

      heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06,
      });

      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06,
        delay: 1,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
        .to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', { y: -200 }, 0);

      // Animate video as user scrolls through the page
      if (videoRef.current) {
        // Wait for video metadata to load to get duration
        videoRef.current.onloadedmetadata = () => {
          gsap.timeline({
            scrollTrigger: {
              trigger: videoRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
              pin: true,
            }
          }).to(
            videoRef.current,
            {
              currentTime: videoRef.current.duration || 1,
              ease: "none"
            }
          );
        };
        // If metadata is already loaded (e.g. from cache), fire manually
        if (videoRef.current.readyState >= 1) {
          videoRef.current.onloadedmetadata();
        }
      }
    });
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="leaf-leaf"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="leaf-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes – designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/input.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Herot;
