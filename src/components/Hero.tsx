const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[2s]"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
      
      <div className="relative container mx-auto px-4 text-center">
        <span className="inline-block animate-fade-in bg-purple-400/10 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Formando líderes del mañana
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
          Tu futuro comienza aquí
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: "0.3s" }}>
          Descubre una educación de calidad con programas diseñados para impulsar tu carrera profesional
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-in" style={{ animationDelay: "0.5s" }}>
          <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
            Conoce nuestras carreras
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
            Agenda una visita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;