import React, { useState } from 'react';
import { Map, List, Trophy, BookOpen } from 'lucide-react';
import MapScreen from './components/MapScreen';
import ListScreen from './components/ListScreen';
import DetailScreen from './components/DetailScreen';
import RankingScreen from './components/RankingScreen';
import GuideScreen from './components/GuideScreen';
import BottomNavigation from './components/BottomNavigation';
import { Location } from './types/Location';

function App() {
  const [activeScreen, setActiveScreen] = useState('map');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const navigationItems = [
    { id: 'map', label: 'Mapa', icon: Map },
    { id: 'list', label: 'Lista', icon: List },
    { id: 'ranking', label: 'Ranking', icon: Trophy },
    { id: 'guide', label: 'Guia', icon: BookOpen },
  ];

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setActiveScreen('detail');
  };

  const handleBackToMap = () => {
    setSelectedLocation(null);
    setActiveScreen('map');
  };

  const handleBackToList = () => {
    setSelectedLocation(null);
    setActiveScreen('list');
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'map':
        return <MapScreen onLocationSelect={handleLocationSelect} />;
      case 'list':
        return <ListScreen onLocationSelect={handleLocationSelect} />;
      case 'ranking':
        return <RankingScreen />;
      case 'guide':
        return <GuideScreen />;
      case 'detail':
        return (
          <DetailScreen
            location={selectedLocation}
            onBack={handleBackToMap}
          />
        );
      default:
        return <MapScreen onLocationSelect={handleLocationSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white shadow-lg min-h-screen relative">
        <div className="pb-20">
          {renderScreen()}
        </div>
        <BottomNavigation
          items={navigationItems}
          activeItem={activeScreen === 'detail' ? 'map' : activeScreen}
          onItemClick={setActiveScreen}
        />
      </div>
    </div>
  );
}

export default App;