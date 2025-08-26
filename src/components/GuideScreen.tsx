import React from 'react';
import { BookOpen, Heart, Shield, Users, Phone, Camera, Share2, Gift } from 'lucide-react';

interface Tip {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const GuideScreen: React.FC = () => {
  const tips: Tip[] = [
    {
      id: '1',
      title: 'Leve água e comida',
      description: 'Em dias quentes, leve água fresca e ração para animais de rua. Uma pequena ação pode salvar uma vida.',
      icon: <Heart className="w-6 h-6 text-red-500" />,
      category: 'Cuidados Básicos'
    },
    {
      id: '2',
      title: 'Divulgue campanhas de adoção',
      description: 'Compartilhe posts de adoção nas redes sociais. Quanto mais visibilidade, maiores as chances de encontrar um lar.',
      icon: <Share2 className="w-6 h-6 text-blue-500" />,
      category: 'Divulgação'
    },
    {
      id: '3',
      title: 'Não compre, adote',
      description: 'Prefira sempre a adoção responsável. Milhares de animais estão esperando por uma segunda chance.',
      icon: <Gift className="w-6 h-6 text-green-500" />,
      category: 'Adoção'
    },
    {
      id: '4',
      title: 'Mantenha distância segura',
      description: 'Aproxime-se devagar de animais desconhecidos. Deixe que eles venham até você primeiro.',
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      category: 'Segurança'
    },
    {
      id: '5',
      title: 'Organize grupos de ajuda',
      description: 'Una-se a vizinhos e amigos para criar uma rede de apoio local para animais necessitados.',
      icon: <Users className="w-6 h-6 text-purple-500" />,
      category: 'Organização'
    },
    {
      id: '6',
      title: 'Tenha contatos de emergência',
      description: 'Mantenha sempre números de veterinários e ONGs próximas para situações urgentes.',
      icon: <Phone className="w-6 h-6 text-red-500" />,
      category: 'Emergência'
    },
    {
      id: '7',
      title: 'Documente casos de maus-tratos',
      description: 'Se presenciar maus-tratos, documente com fotos/vídeos e denuncie às autoridades competentes.',
      icon: <Camera className="w-6 h-6 text-orange-500" />,
      category: 'Proteção'
    },
    {
      id: '8',
      title: 'Doe para ONGs confiáveis',
      description: 'Pesquise bem antes de doar. Prefira organizações transparentes e com histórico comprovado.',
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      category: 'Doação'
    }
  ];

  const categories = Array.from(new Set(tips.map(tip => tip.category)));

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Guia de Boas Práticas</h1>
        </div>
        <p className="text-blue-100">Como ajudar animais de rua de forma efetiva</p>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4">
        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-600 mb-1">{tips.length}</div>
          <div className="text-sm text-gray-600">dicas práticas para você começar a ajudar</div>
        </div>
      </div>

      {/* Tips List */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-4">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 px-2">{category}</h2>
              <div className="space-y-3">
                {tips
                  .filter(tip => tip.category === category)
                  .map((tip, tipIndex) => (
                    <div
                      key={tip.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
                      style={{
                        animationDelay: `${(categoryIndex * 2 + tipIndex) * 100}ms`
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {tip.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="p-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white text-center">
            <Heart className="w-12 h-12 mx-auto mb-3 text-white" />
            <h3 className="text-xl font-bold mb-2">Faça a Diferença</h3>
            <p className="text-sm text-green-100 mb-4">
              Cada pequeno gesto conta. Juntos, podemos criar um mundo melhor para todos os animais.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <p className="text-xs font-medium">
                💡 Dica: Comece com uma ação pequena hoje mesmo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideScreen;