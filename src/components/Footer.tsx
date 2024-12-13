import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Universidad</h3>
            <p className="text-white/80 mb-4">
              Formando profesionales de excelencia con visión global y compromiso social.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Admisión', 'Carreras', 'Campus Virtual', 'Biblioteca'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary" />
                <span className="text-white/80">+51 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-secondary" />
                <span className="text-white/80">info@universidad.edu</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-secondary" />
                <span className="text-white/80">Av. Universidad 123, Lima</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
            <p className="text-white/80 mb-2">Lunes a Viernes</p>
            <p className="text-white mb-4">8:00 AM - 6:00 PM</p>
            <p className="text-white/80 mb-2">Sábados</p>
            <p className="text-white">9:00 AM - 1:00 PM</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Universidad. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;