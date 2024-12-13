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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-in">
          <span className="inline-block bg-purple-400/10 text-purple-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Formación integral para tu éxito
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Descubre las razones que nos hacen la mejor opción para tu educación superior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl group animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 text-purple-400 group-hover:text-purple-500">
                <feature.icon size={32} className="transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;