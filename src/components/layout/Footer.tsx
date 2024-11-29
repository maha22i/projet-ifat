import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              IFAT
            </h3>
            <p className="text-gray-400">
              Révolutionnez votre commerce avec notre solution tout-en-un.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">À Propos</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Fonctionnalités</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-purple-400 transition-colors">Équipe</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Djibouti, République de Djibouti</li>
              <li className="text-gray-400">+33 07 75 84 09 62</li>
              <li className="text-gray-400">chehem21@gmail.com</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Suivez-nous</h4>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-1">
            © {currentYear} IFAT. Fait avec 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.span>
            à Djibouti
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}