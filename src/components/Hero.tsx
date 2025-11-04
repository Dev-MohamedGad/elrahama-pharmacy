import heroImage from '../images/elrahma-farma-group.jpeg';

export const Hero = () => {
  return (
    <section 
      className="relative pt-32 pb-20 px-6 lg:px-8 min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-pink-800/70 to-pink-900/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Welcome to
            <span className="block text-pink-100">Alrahma Pharmacies</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
            Your trusted source for quality pharmaceutical products and comprehensive healthcare solutions. We're committed to your health and well-being.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a href="#categories" className="px-8 py-4 bg-white text-pink-700 font-medium rounded-lg hover:bg-pink-50 transition-all hover:shadow-xl hover:scale-105 inline-block text-center">
              View Categories
            </a>
            <a href="#about" className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-pink-700 transition-all inline-block text-center">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
