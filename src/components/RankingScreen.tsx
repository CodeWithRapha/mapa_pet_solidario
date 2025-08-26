import React from 'react';
import { Trophy, MapPin, TrendingUp } from 'lucide-react';

interface CityRanking {
  position: number;
  city: string;
  state: string;
  ongsCount: number;
  growth: number;
}

const RankingScreen: React.FC = () => {
  const cityRankings: CityRanking[] = [
    { position: 1, city: 'São Paulo', state: 'SP', ongsCount: 120, growth: 15 },
    { position: 2, city: 'Belo Horizonte', state: 'MG', ongsCount: 80, growth: 12 },
    { position: 3, city: 'Curitiba', state: 'PR', ongsCount: 65, growth: 8 },
    { position: 4, city: 'Porto Alegre', state: 'RS', ongsCount: 58, growth: 10 },
    { position: 5, city: 'Brasília', state: 'DF', ongsCount: 52, growth: 18 },
    { position: 6, city: 'Salvador', state: 'BA', ongsCount: 45, growth: 5 },
    { position: 7, city: 'Fortaleza', state: 'CE', ongsCount: 38, growth: 22 },
    { position: 8, city: 'Recife', state: 'PE', ongsCount: 35, growth: 7 },
  ];

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1:
        return 'bg-yellow-500 text-white';
      case 2:
        return 'bg-gray-400 text-white';
      case 3:
        return 'bg-amber-600 text-white';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const getPositionIcon = (position: number) => {
    if (position <= 3) {
      return <Trophy className="w-5 h-5" />;
    }
    return <span className="font-bold text-sm">{position}</span>;
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Ranking de Cidades</h1>
        </div>
        <p className="text-yellow-100">Cidades com mais iniciativas solidárias</p>
      </div>

      {/* Stats Cards */}
      <div className="p-4 bg-gray-50">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">465</div>
            <div className="text-xs text-gray-600">Total de ONGs</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">8</div>
            <div className="text-xs text-gray-600">Cidades ativas</div>
          </div>
        </div>
      </div>

      {/* Ranking List */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-3">
          {cityRankings.map((city) => (
            <div
              key={city.city}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                {/* Position */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getPositionColor(city.position)}`}>
                  {getPositionIcon(city.position)}
                </div>

                {/* City Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{city.city}</h3>
                    <span className="text-sm text-gray-500">- {city.state}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{city.ongsCount} ONGs</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span>+{city.growth}% este ano</span>
                    </div>
                  </div>
                </div>

                {/* Growth Indicator */}
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  city.growth > 15 
                    ? 'bg-green-100 text-green-800' 
                    : city.growth > 10 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {city.growth > 15 ? 'Alto' : city.growth > 10 ? 'Médio' : 'Estável'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingScreen;