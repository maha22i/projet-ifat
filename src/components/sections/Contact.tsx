import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-300 text-xl">
            Nous sommes là pour répondre à vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactCard
              icon={<Phone />}
              title="Téléphone"
              content="+33 07 75 84 09 62"
            />
            <ContactCard
              icon={<Mail />}
              title="Email"
              content="chehem21@gmail.com"
            />
            <ContactCard
              icon={<MessageSquare />}
              title="Support"
              content="support@ifat.dj"
            />
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              ></textarea>
            </div>
            <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-lg bg-white/5 text-purple-500">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
}