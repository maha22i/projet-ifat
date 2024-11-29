import React from 'react';
import { ArrowRight, ShoppingBag, Truck, Wallet } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Révolutionnez votre commerce avec IFAT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            La première plateforme à Djibouti qui connecte vendeurs et fournisseurs pour une
            gestion intelligente des stocks, des commandes et des paiements en toute transparence.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              Commencer maintenant
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-purple-500 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShoppingBag className="w-8 h-8 text-purple-400" />}
            title="Gestion des stocks"
            description="Suivez vos stocks en temps réel et recevez des alertes automatiques"
          />
          <FeatureCard
            icon={<Truck className="w-8 h-8 text-blue-400" />}
            title="Commandes simplifiées"
            description="Commandez directement auprès des fournisseurs sans vous déplacer"
          />
          <FeatureCard
            icon={<Wallet className="w-8 h-8 text-green-400" />}
            title="Paiements intégrés"
            description="D-Money, Waafi, cartes bancaires et plus encore"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}