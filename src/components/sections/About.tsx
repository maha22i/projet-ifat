import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="about" className="py-20 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            À Propos d'IFAT
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-xl max-w-3xl mx-auto"
          >
            IFAT est né d'une vision simple : révolutionner la façon dont les commerces à Djibouti gèrent leurs opérations quotidiennes.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <div className="mb-4 text-purple-500">
              <Target size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Notre Mission</h3>
            <p className="text-gray-400">
              Simplifier et moderniser la gestion commerciale pour les entreprises djiboutiennes à travers une solution technologique innovante.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <div className="mb-4 text-blue-500">
              <Lightbulb size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Notre Vision</h3>
            <p className="text-gray-400">
              Devenir la référence en matière de solutions digitales pour le commerce à Djibouti et dans la région.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <div className="mb-4 text-green-500">
              <Rocket size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Notre Approche</h3>
            <p className="text-gray-400">
              Une solution tout-en-un qui répond aux besoins spécifiques du marché local avec une technologie de pointe.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}