const news = [
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Eventos",
    title: "Conferencia Internacional de Innovación",
    date: "15 Mar 2024"
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Investigación",
    title: "Nuevo Centro de Investigación Tecnológica",
    date: "12 Mar 2024"
  },
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Académico",
    title: "Apertura de Nuevas Carreras 2024",
    date: "10 Mar 2024"
  }
];

const News = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-in">
          <span className="inline-block bg-purple-400/10 text-purple-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Actualidad
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Últimas Noticias
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Mantente al día con las últimas novedades y eventos de nuestra universidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article 
              key={item.title}
              className="group cursor-pointer animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="inline-block bg-purple-400/10 text-purple-500 px-3 py-1 rounded-full text-sm font-medium mb-2">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-purple-500 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;