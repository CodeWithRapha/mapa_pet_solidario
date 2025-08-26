import React from 'react';
import { MapPin, Heart } from 'lucide-react';
import { Location } from '../types/Location';
import { mockLocations } from '../data/mockLocations';

interface MapScreenProps {
  onLocationSelect: (location: Location) => void;
}

const MapScreen: React.FC<MapScreenProps> = ({ onLocationSelect }) => {
  const getTypeColor = (type: Location['type']) => {
    switch (type) {
      case 'shelter':
        return 'bg-green-500';
      case 'ong':
        return 'bg-blue-500';
      case 'clinic':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: Location['type']) => {
    switch (type) {
      case 'shelter':
        return 'Abrigo';
      case 'ong':
        return 'ONG';
      case 'clinic':
        return 'Clínica';
      default:
        return 'Local';
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Mapa Solidário
            </h1>
            <p className="text-green-100 text-sm">Encontre ajuda para animais de rua</p>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative bg-green-50">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
          {/* Simulated Map Interface */}
          <div className="w-full h-full relative overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 bg-green-50 opacity-50">
              <div className="grid grid-cols-8 grid-rows-12 h-full">
                {Array.from({ length: 96 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-green-100 opacity-30"
                  />
                ))}
              </div>
            </div>

            {/* Location Markers */}
            {mockLocations.map((location, index) => (
              <div
                key={location.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110"
                style={{
                  left: `${20 + (index * 15) % 60}%`,
                  top: `${30 + (index * 20) % 40}%`,
                }}
                onClick={() => onLocationSelect(location)}
              >
                <div className={`w-10 h-10 ${getTypeColor(location.type)} rounded-full flex items-center justify-center shadow-lg border-2 border-white`}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap">
                  <div className="font-semibold text-gray-800">{location.name}</div>
                  <div className="text-gray-500">{getTypeLabel(location.type)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Legenda</h3>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Abrigos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-600">ONGs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Clínicas</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{mockLocations.length}</div>
            <div className="text-xs text-gray-600">Locais próximos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapScreen;