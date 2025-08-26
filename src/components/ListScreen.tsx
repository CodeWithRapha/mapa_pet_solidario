import React from 'react';
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { Location } from '../types/Location';
import { mockLocations } from '../data/mockLocations';

interface ListScreenProps {
  onLocationSelect: (location: Location) => void;
}

const ListScreen: React.FC<ListScreenProps> = ({ onLocationSelect }) => {
  const getTypeColor = (type: Location['type']) => {
    switch (type) {
      case 'shelter':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'ong':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'clinic':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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

  const sortedLocations = [...mockLocations].sort((a, b) => (a.distance || 0) - (b.distance || 0));

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <h1 className="text-xl font-bold">Locais Próximos</h1>
        <p className="text-green-100 text-sm">{mockLocations.length} locais encontrados</p>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-3">
          {sortedLocations.map((location) => (
            <div
              key={location.id}
              onClick={() => onLocationSelect(location)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getTypeColor(location.type)}`}>
                      {getTypeLabel(location.type)}
                    </span>
                    {location.distance && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {location.distance} km
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-1">{location.name}</h3>
                  
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                      <span className="line-clamp-2">{location.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 flex-shrink-0 text-gray-400" />
                      <span>{location.phone}</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
                      <span className="text-xs">{location.hours}</span>
                    </div>
                  </div>
                </div>
                
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListScreen;