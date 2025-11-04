import heroSectionImage from '../images/hero-section.jpeg';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* High-quality image background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroSectionImage} 
          alt="Alrahma Pharmacies"
          className="w-full h-full object-cover object-center"
          style={{
            imageRendering: 'auto',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            WebkitFontSmoothing: 'antialiased',
            filter: 'contrast(1.05) saturate(1.1)'
          }}
          loading="eager"
        />
      </div>

      {/* Light overlay for subtle enhancement */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 via-pink-800/15 to-pink-900/20"></div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
