import { useState, useEffect } from "react";

const BurgerBanner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Nunito:wght@400;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        // body {
        //   align-items: center;
        //   justify-content: center;
        //   background: #1a1a1a;
        //   font-family: 'Nunito', sans-serif;
        // }

        .banner-wrapper {
          width: 100%;
          // max-width: 520px;
          padding: 20px;
        }

        .banner {
          position: relative;
          background: linear-gradient(135deg, #c0392b 0%, #e74c3c 45%, #c0392b 100%);
          border-radius: 24px;
          padding: 36px 32px 36px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          // box-shadow:
          //   0 20px 60px rgba(192, 57, 43, 0.5),
          //   0 0 0 1px rgba(255,255,255,0.08) inset;
          transform: ${animate ? "translateY(0) scale(1)" : "translateY(30px) scale(0.96)"};
          opacity: ${animate ? 1 : 0};
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease;
        }

        /* Decorative circles in background */
        .banner::before {
          content: '';
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          top: -80px;
          right: -60px;
          pointer-events: none;
        }

        .banner::after {
          content: '';
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          bottom: -50px;
          left: 30px;
          pointer-events: none;
        }

        /* Dot pattern overlay */
        .dots-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 22px 22px;
          border-radius: 24px;
          pointer-events: none;
        }

        /* Left: text content */
        .content {
          position: relative;
          z-index: 2;
          flex: 1;
          transform: ${animate ? "translateX(0)" : "translateX(-20px)"};
          opacity: ${animate ? 1 : 0};
          transition: transform 0.7s 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s 0.15s ease;
        }

        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
          margin-bottom: 12px;
          backdrop-filter: blur(4px);
        }

        .headline {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 28px;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 10px;
          text-shadow: 0 2px 12px rgba(0,0,0,0.2);
        }

        .headline span {
          color: #ffd700;
          display: block;
          font-size: 36px;
        }

        .description {
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.82);
          line-height: 1.6;
          margin-bottom: 22px;
          max-width: 200px;
        }

        .cta-btn {
          position: relative;
          background: #fff;
          color: #c0392b;
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,215,0,0.15), transparent);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
        }

        .cta-btn:hover::before { opacity: 1; }
        .cta-btn:active { transform: scale(0.97); }

        .arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #c0392b;
          color: #fff;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          font-size: 12px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .cta-btn:hover .arrow { transform: translateX(3px); }

        /* Right: burger image */
        .burger-img-wrap {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          width: 170px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: ${animate ? "translateX(0) rotate(0deg)" : "translateX(30px) rotate(8deg)"};
          opacity: ${animate ? 1 : 0};
          transition: transform 0.8s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s 0.2s ease;
        }

        /* Glowing halo behind burger */
        .burger-glow {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,180,0,0.25) 0%, transparent 70%);
          filter: blur(12px);
        }

        .burger-emoji {
          font-size: 120px;
          line-height: 1;
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.35));
          animation: float 3s ease-in-out infinite;
          position: relative;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50%       { transform: translateY(-10px) rotate(4deg); }
        }

        /* Sparkle decorations */
        .sparkle {
          position: absolute;
          color: #ffd700;
          font-size: 14px;
          animation: sparkle-pulse 2s ease-in-out infinite;
          z-index: 3;
        }
        .sparkle-1 { top: 18px; right: 18px; animation-delay: 0s; }
        .sparkle-2 { top: 50%; right: 12px; animation-delay: 0.6s; font-size: 10px; }
        .sparkle-3 { bottom: 22px; right: 110px; animation-delay: 1.1s; font-size: 11px; }

        @keyframes sparkle-pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50%       { opacity: 1; transform: scale(1.2); }
        }

        /* Discount badge sticker */
        .discount-sticker {
          position: absolute;
          top: -10px;
          right: -8px;
          background: #ffd700;
          color: #8b0000;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 11px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          line-height: 1.1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 4;
          animation: sticker-spin 6s linear infinite;
        }

        .discount-sticker .big { font-size: 16px; }

        @keyframes sticker-spin {
          0% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
          100% { transform: rotate(-5deg); }
        }
      `}</style>

      <div className="banner-wrapper">
        <div className="banner">
          <div className="dots-overlay" />

          {/* Sparkles */}
          <div className="sparkle sparkle-1">✦</div>
          <div className="sparkle sparkle-2">✦</div>
          <div className="sparkle sparkle-3">✦</div>

          {/* Text Content */}
          <div className="content">
            <div className="badge">🔥 Limited Offer</div>
            <h1 className="headline">
              Burgers with
              <span>10% Off!</span>
            </h1>
            <p className="description">
              Enjoy our delicious burgers at a lower price with our special discount offer.
            </p>
            <button className="cta-btn">
              Order Now
              <span className="arrow">→</span>
            </button>
          </div>

          {/* Burger Image Area */}
          <div className="burger-img-wrap">
            <div className="burger-glow" />
            <div className="discount-sticker">
              <span className="big">10%</span>
              <span>OFF</span>
            </div>
            <div className="burger-emoji">🍔</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerBanner;
