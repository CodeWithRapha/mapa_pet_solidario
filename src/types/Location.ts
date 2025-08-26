export interface Location {
  id: string;
  name: string;
  type: 'shelter' | 'ong' | 'clinic';
  address: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distance?: number;
  description?: string;
  image?: string;
}