import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Secfour = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);

  const services = [
    { name: "Wedding Budget Decor", price: "9,999" },
    { name: "Birthday Surprise", price: "4,999" },
    { name: "Unplug Live Band", price: "29,999" },
    { name: "Theme Entry", price: "9,999" },
    { name: "Welcome Dance DJ", price: "29,999" },
    { name: "Chendamelam", price: "9,999" },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!container || !section) return;

    const totalScrollWidth = container.scrollWidth - window.innerWidth;
    
    const ctx = gsap.context(() => {
      // Horizontal scrolling animation
      const horizontalTween = gsap.to(container, {
        x: -totalScrollWidth,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${container.scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false,
          onLeave: () => {
            gsap.to(section, { opacity: 0, duration: 0.5 });
          },
          onEnterBack: () => {
            gsap.to(section, { opacity: 1, duration: 0.5 });
          }
        }
      });

      // Card hover effects
      gsap.utils.toArray(".service-card").forEach(card => {
        gsap.set(card, { transformPerspective: 1000 });
        
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -20,
            duration: 0.3,
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
          });
        });
      });
      
      // Background image parallax effect
      gsap.to(content, {
        y: -100,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image with Overlay */}
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120%",
          background: "url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80) center/cover no-repeat",
          zIndex: 1,
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.7) 100%)",
          zIndex: 2
        }} />
      </div>

      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 3,
          padding: "0 5%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ffd700",
            marginBottom: "3rem",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Our Signature Event Services
        </h2>

        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            gap: "2.5rem",
            willChange: "transform",
            padding: "0 2rem",
            alignItems: "center",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{
                minWidth: "340px",
                height: "60vh",
                borderRadius: "25px",
                overflow: "hidden",
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
                cursor: "pointer",
                background: "#000",
                position: "relative",
              }}
            >
              {/* Gold Top Section */}
              <div
                style={{
                  height: "50%",
                  background: "linear-gradient(135deg, #ffd700 0%, #daa520 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.5rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
                  }}
                />
                <h3
                  style={{
                    color: "#000",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 800,
                    textAlign: "center",
                    zIndex: 2,
                    letterSpacing: "0.5px",
                    lineHeight: 1.3,
                    textTransform: "uppercase",
                  }}
                >
                  {service.name}
                </h3>
              </div>
              
              {/* Black Bottom Section */}
              <div
                style={{
                  height: "50%",
                  background: "#0a0a0a",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    color: "#f0f0f0",
                    fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  Celebrate in style with our unique and creative touch designed exclusively for your special moments.
                </p>
                
                {/* Skewed Price Element */}
                <div
                  style={{
                    background: "linear-gradient(45deg, #ffd700 0%, #daa520 100%)",
                    color: "#000",
                    padding: "1.2rem 2.5rem",
                    fontWeight: 800,
                    fontSize: "clamp(1.3rem, 2vw, 1.8rem)",
                    textAlign: "center",
                    boxShadow: "0 4px 20px rgba(218, 165, 32, 0.4)",
                    letterSpacing: "1px",
                    position: "absolute",
                    bottom: "-20px",
                    right: "30px",
                    transform: "skewX(-10deg)",
                    border: "2px solid rgba(0,0,0,0.3)",
                  }}
                >
                  <div style={{ transform: "skewX(10deg)" }}>
                    Rs. {service.price}/-
                  </div>
                </div>
              </div>
              
              {/* Gold Corner Accent */}
              <div style={{
                position: "absolute",
                top: "45%",
                left: 0,
                width: "100%",
                height: "20px",
                background: "#ffd700",
                transform: "translateY(-50%)",
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)"
              }} />
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#ffd700",
          display: "flex",
          alignItems: "center",
          fontSize: "0.9rem",
          zIndex: 10,
          opacity: 0.8
        }}>
          <span style={{ marginRight: "10px" }}>Scroll horizontally</span>
          <div style={{
            width: "30px",
            height: "30px",
            border: "2px solid #ffd700",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{
              width: "10px",
              height: "10px",
              borderRight: "2px solid #ffd700",
              borderBottom: "2px solid #ffd700",
              transform: "rotate(-45deg)",
              marginLeft: "-5px"
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secfour;