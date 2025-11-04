export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Crafting Digital
            <span className="block text-slate-700">Experiences</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
            We transform ideas into stunning digital realities. Explore our diverse portfolio of creative solutions across multiple industries.
          </p>
          <div className="flex items-center gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all hover:shadow-xl hover:scale-105">
              View Our Work
            </button>
            <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
