import React from 'react';
import { ArrowLeft, MapPin, Phone, Clock, ExternalLink, Heart, Share2 } from 'lucide-react';
import { Location } from '../types/Location';

interface DetailScreenProps {
  location: Location | null;
  onBack: () => void;
}

const DetailScreen: React.FC<DetailScreenProps> = ({ location, onBack }) => {
  if (!location) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500">Local não encontrado</p>
      </div>
    );
  }

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

  const handleCall = () => {
    window.open(`tel:${location.phone}`, '_self');
  };

  const handleOpenMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: location.name,
          text: `Confira este local no Mapa Solidário: ${location.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1 rounded-full hover:bg-green-700 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold">Detalhes do Local</h1>
        </div>
        <button
          onClick={handleShare}
          className="p-2 rounded-full hover:bg-green-700 transition-colors"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Image */}
        {location.image && (
          <div className="h-48 relative overflow-hidden">
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getTypeColor(location.type)}`}>
                {getTypeLabel(location.type)}
              </span>
            </div>
            {location.distance && (
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {location.distance} km
                </span>
              </div>
            )}
          </div>
        )}

        <div className="p-6">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h1>
            {location.description && (
              <p className="text-gray-600 leading-relaxed">{location.description}</p>
            )}
          </div>

          {/* Information Cards */}
          <div className="space-y-4 mb-8">
            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600">{location.address}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                  <p className="text-gray-600">{location.phone}</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h3>
                  <p className="text-gray-600">{location.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleCall}
              className="w-full bg-green-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-green-700 active:bg-green-800 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </button>
            
            <button
              onClick={handleOpenMaps}
              className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Abrir no Google Maps
            </button>
            
            <button className="w-full bg-orange-100 text-orange-800 font-semibold py-4 px-6 rounded-xl hover:bg-orange-200 active:bg-orange-300 transition-colors flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Quero Ajudar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;