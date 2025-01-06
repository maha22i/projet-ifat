import React from "react";
import { motion } from "framer-motion";

export function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const teamMembers = [
    {
      name: "Mohamed Chehem Mohamed",
      role: "Chef de Projet",
      photo: "./assets/mahami.jpg",
      description:
        "Visionnaire et stratège, Mohamed dirige l'équipe avec passion et détermination.",
    },
    {
      name: "Mohamed Houmed",
      role: "Comptable et Financier",
      photo: "./assets/houmed.jpg",
      description:
        "Expert en gestion financière, Mohamed assure la solidité économique du projet.",
    },
    {
      name: "Youssouf Abayazid",
      role: "Développeur Web",
      photo: "./assets/youssouf.jpg",
      description:
        "Passionné de technologie, Youssouf donne vie à nos innovations numériques.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-black">
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
            Notre Équipe
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 text-xl">
            Une équipe passionnée et expérimentée
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-center"
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={member.photo}
                  alt={`${member.name}'s photo`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {member.name}
              </h3>
              <p className="text-purple-400 mb-4">{member.role}</p>
              <p className="text-gray-400">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
