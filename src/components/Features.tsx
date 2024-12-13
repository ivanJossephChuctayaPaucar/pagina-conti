import { GraduationCap, BookOpen, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: "Excelencia Académica",
    description: "Programas acreditados y docentes de primer nivel"
  },
  {
    icon: BookOpen,
    title: "Metodología Innovadora",
    description: "Aprendizaje práctico y tecnología de vanguardia"
  },
  {
    icon: Users,
    title: "Comunidad Global",
    description: "Red internacional de estudiantes y profesionales"
  },
  {
    icon: Trophy,
    title: "Reconocimiento",
    description: "Entre las mejores universidades del país"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-in">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Formación integral para tu éxito
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Descubre las razones que nos hacen la mejor opción para tu educación superior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="card group animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 text-secondary">
                <feature.icon size={32} className="transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-text-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;