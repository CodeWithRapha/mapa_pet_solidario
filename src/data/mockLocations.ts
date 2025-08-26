import { Location } from '../types/Location';

export const mockLocations: Location[] = [
  {
    id: '1',
    name: 'Abrigo São Francisco',
    type: 'shelter',
    address: 'Rua das Flores, 123 - Centro, São Paulo - SP',
    phone: '(11) 3456-7890',
    hours: 'Segunda a Sexta: 8h às 17h | Sábado: 8h às 12h',
    coordinates: { lat: -23.550520, lng: -46.633308 },
    distance: 0.8,
    description: 'Abrigo especializado no resgate e cuidado de animais abandonados. Realizamos castração, vacinação e encontramos lares para os pets.',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '2',
    name: 'ONG Patinhas do Bem',
    type: 'ong',
    address: 'Av. Paulista, 456 - Bela Vista, São Paulo - SP',
    phone: '(11) 2345-6789',
    hours: 'Segunda a Domingo: 9h às 16h',
    coordinates: { lat: -23.561414, lng: -46.655981 },
    distance: 1.2,
    description: 'ONG dedicada ao resgate, tratamento e adoção responsável. Trabalhamos com campanhas educativas e eventos de adoção.',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '3',
    name: 'Clínica Veterinária Vida Animal',
    type: 'clinic',
    address: 'Rua Augusta, 789 - Consolação, São Paulo - SP',
    phone: '(11) 4567-8901',
    hours: 'Segunda a Sexta: 7h às 22h | Fim de semana: 8h às 18h',
    coordinates: { lat: -23.558730, lng: -46.662180 },
    distance: 2.1,
    description: 'Clínica veterinária com atendimento emergencial 24h. Oferecemos desconto especial para ONGs e casos de animais resgatados.',
    image: 'https://images.pexels.com/photos/6235234/pexels-photo-6235234.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '4',
    name: 'Santuário Animal Esperança',
    type: 'shelter',
    address: 'Estrada da Serra, 321 - Vila Madalena, São Paulo - SP',
    phone: '(11) 5678-9012',
    hours: 'Terça a Domingo: 9h às 15h',
    coordinates: { lat: -23.544851, lng: -46.691416 },
    distance: 3.5,
    description: 'Santuário que abriga animais com deficiência e idosos. Focamos em proporcionar qualidade de vida até o fim.',
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '5',
    name: 'Centro de Zoonoses Municipal',
    type: 'clinic',
    address: 'Av. Ibirapuera, 654 - Ibirapuera, São Paulo - SP',
    phone: '(11) 6789-0123',
    hours: 'Segunda a Sexta: 8h às 16h',
    coordinates: { lat: -23.587416, lng: -46.655707 },
    distance: 4.2,
    description: 'Centro público de controle de zoonoses. Oferece vacinação antirrábica gratuita e atendimento para animais feridos.',
    image: 'https://images.pexels.com/photos/4269788/pexels-photo-4269788.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];