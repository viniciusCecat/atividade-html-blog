import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

function App() {
  const blogTitle = 'Meu Blog de Viagens';

  const navigationLinks = [
    { label: 'Home', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'Contato', href: '#' },
  ];

  const post = {
    titulo: 'Descobrindo as Praias do Nordeste',
    autor: 'Sandro Matheus Ramos',
    data: '15 de agosto de 2025',
    dataIso: '2025-08-15',
    imagem: '/praia.jpg',
    imagemAlt: 'Paisagem de praia com mar azul e areia clara',
    legenda: 'Paisagem de uma das belas praias do Nordeste brasileiro.',
    conteudo: [
      'O Nordeste brasileiro e conhecido por suas praias paradisiacas, aguas cristalinas e paisagens que parecem cartoes-postais. Cada parada da viagem trouxe cenarios marcantes e um clima perfeito para descansar.',
      'Entre um mergulho e outro, a experiencia ficou ainda melhor com a culinaria local, o artesanato e a receptividade das pessoas. Foi uma viagem cheia de cultura, cores e momentos inesqueciveis.',
      'Se voce gosta de destinos ensolarados, boa comida e paisagens naturais impressionantes, explorar o litoral nordestino e uma escolha excelente para as proximas ferias.',
    ],
  };

  const relatedPosts = [
    'Explorando as Montanhas de Minas',
    'Uma Semana em Florianopolis',
    'Guia de Viagem para o Rio de Janeiro',
  ];

  return (
    <div className="page-shell">
      <Header title={blogTitle} />
      <Navigation links={navigationLinks} />

      <main className="content-layout">
        <Article post={post} />
        <Sidebar posts={relatedPosts} />
      </main>

      <Footer text="Copyright 2026 - Todos os direitos reservados." />
    </div>
  );
}

export default App;
