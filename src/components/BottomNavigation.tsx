import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface BottomNavigationProps {
  items: NavigationItem[];
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  activeItem,
  onItemClick,
}) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'stroke-2' : 'stroke-1.5'}`} />
              <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;