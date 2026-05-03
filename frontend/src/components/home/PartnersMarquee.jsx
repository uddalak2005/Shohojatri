import React, { useRef, useState, useEffect } from 'react';
import { urlFor } from '../../utils/sanity';

const PartnersMarquee = ({ data }) => {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const partners = data || [];

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && measureRef.current) {
        // Only animate if the natural width of the single line is greater than screen width
        setShouldAnimate(measureRef.current.scrollWidth > containerRef.current.clientWidth);
      }
    };
    
    // Timeout ensures fonts/images load before measuring
    const timeout = setTimeout(checkOverflow, 250);
    window.addEventListener('resize', checkOverflow);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [partners]);

  // Completely hide section if no partners exist
  if (!partners || partners.length === 0) return null;

  // Duplicate list if animating
  const displayList = shouldAnimate ? [...partners, ...partners] : partners;

  const getPartnerContent = (partner) => {
    if (partner.logo && partner.logo.asset) {
       return <img src={urlFor(partner.logo).height(50).url()} alt={partner.name} className="h-8 md:h-10 object-contain mix-blend-multiply" />;
    }
    return <span className="font-display text-[#2e6a4f] text-base md:text-lg font-medium">{partner.name}</span>;
  };

  return (
    <section className="py-12 bg-white border-y border-[#2e6a4f]/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-6">
        <p className="font-body text-[#888888] text-xs uppercase tracking-[0.2em] text-center font-bold">
          Our Partners & Collaborators
        </p>
      </div>

      <div ref={containerRef} className="relative w-full overflow-x-hidden group">
        
        {/* Invisible measuring container */}
        <div 
          ref={measureRef}
          className="absolute top-0 left-0 flex items-center whitespace-nowrap opacity-0 pointer-events-none -z-10"
        >
          {partners.map((partner, index) => (
            <div key={`measure-${index}`} className="mx-4 md:mx-8 px-6 md:px-8 py-3 md:py-4 gap-3">
               {getPartnerContent(partner)}
            </div>
          ))}
        </div>

        {/* Visible Display */}
        <div className={`flex ${shouldAnimate ? 'animate-marquee whitespace-nowrap items-center' : 'justify-center flex-wrap gap-4 px-4'}`}>
          {displayList.map((partner, index) => {
            const Wrapper = partner.url ? 'a' : 'div';
            const wrapperProps = partner.url ? { href: partner.url, target: "_blank", rel: "noopener noreferrer" } : {};
            
            return (
              <Wrapper 
                key={`${partner._id || index}-${index}`} 
                {...wrapperProps}
                className={`
                  bg-[#2e6a4f]/5 rounded-xl inline-flex items-center justify-center 
                  opacity-70 hover:opacity-100 transition-opacity gap-3
                  ${shouldAnimate ? 'mx-4 md:mx-8 px-6 md:px-8 py-3 md:py-4 whitespace-nowrap' : 'px-6 md:px-8 py-3 md:py-4'}
                `}
              >
                {getPartnerContent(partner)}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
