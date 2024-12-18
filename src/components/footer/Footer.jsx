import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white flex flex-col">
      <div className="pt-10 md:pt-20 pb-12 w-full px-[2%] md:px-[4%] lg:px-[8%] flex flex-col md:flex-row md:justify-between md:items-center">
        
        <Link href="/" className="w-[33%]">
          <Image 
            src="/logo3.png" 
            alt="Medibooks, tienda online de libros en Mar del Plata" 
            width={400} 
            height={120} 
            className="w-[200px] lg:w-[240px] h-auto object-contain hidden md:block"
            loading="lazy"
          />
        </Link>
        
        <div className="w-full md:w-[33%] mt-8 md:mt-0 flex justify-center space-x-6 md:space-x-4">
          <a 
            href="https://www.instagram.com/medibooks.oficial" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram de Medibooks"
            className="text-[#e1306c] md:text-gray-600 md:hover:text-[#E1306C] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=542233414157" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp de Medibooks"
            className="text-[#25d366] md:text-gray-600 md:hover:text-[#25D366] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a 
            href="mailto:somosmedibooks@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Enviar correo a Medibooks"
            className="text-[#1b7b7e] md:text-gray-600 md:hover:text-[#1b7b7e] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>

        <div className="w-full md:w-[33%] mt-10 md:mt-0 text-gray-400 text-center md:text-right">
          <p>Mar del Plata, Bs As, Argentina</p>
          <p>Gaboto 5434</p>
        </div>

        <Link href="/">
          <Image 
            src="/logo3.png" 
            alt="Medibooks, tienda online de libros en Mar del Plata" 
            width={400} 
            height={120} 
            className="w-[179px] h-auto mx-auto mt-6 object-contain md:hidden"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="py-3 md:py-8 md:mt-12 text-center text-gray-300 text-xs md:text-lg md:font-semibold bg-gray-900">
        <p>&copy; {new Date().getFullYear()} Medibooks. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
