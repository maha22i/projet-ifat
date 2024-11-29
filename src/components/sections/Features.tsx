import React from 'react';
import { 
  BarChart3, 
  Clock, 
  CloudLightning,
  Database,
  FileText,
  Shield,
  Smartphone,
  Users
} from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Fonctionnalités innovantes
          </h2>
          <p className="text-gray-400 text-xl">
            Une suite complète d'outils pour moderniser votre commerce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Smartphone />}
            title="Application mobile"
            description="Gérez votre commerce où que vous soyez"
          />
          <FeatureCard
            icon={<Database />}
            title="Gestion des stocks"
            description="Suivi en temps réel et alertes automatiques"
          />
          <FeatureCard
            icon={<FileText />}
            title="E-factures"
            description="Génération automatique des factures"
          />
          <FeatureCard
            icon={<Shield />}
            title="Paiements sécurisés"
            description="Intégration avec les solutions locales"
          />
          <FeatureCard
            icon={<Users />}
            title="Gestion RH"
            description="Suivez votre personnel efficacement"
          />
          <FeatureCard
            icon={<BarChart3 />}
            title="Analyses détaillées"
            description="Visualisez vos performances"
          />
          <FeatureCard
            icon={<Clock />}
            title="Temps réel"
            description="Synchronisation instantanée"
          />
          <FeatureCard
            icon={<CloudLightning />}
            title="Performance"
            description="Rapide et fiable"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
      <div className="mb-4 text-purple-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}