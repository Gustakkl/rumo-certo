import React from 'react';
import AnimatedSection from './AnimatedSection';

const treatmentModalities = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    title: "Psicoterapia",
    description: "Sessões com psicólogos e psiquiatras para explorar emoções e modificar padrões de pensamento disfuncionais com técnicas como a TCC."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
    title: "Tratamento Medicamentoso",
    description: "Uso de antidepressivos, ansiolíticos e outros medicamentos sob supervisão médica para controlar sintomas e restaurar o equilíbrio."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    title: "Terapia Ocupacional",
    description: "Desenvolvimento de habilidades para a vida cotidiana, estimulando a criatividade, interação social e independência."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    title: "Terapias Holísticas",
    description: "Práticas como meditação e mindfulness para promover a conexão entre mente e corpo e a autorregulação emocional."
  }
];

const MentalHealth: React.FC = () => {
  return (
    <section id="saude-mental" className="py-20 md:py-32 bg-teal-950">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tratamento de Saúde Mental</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Um caminho para o equilíbrio e bem-estar, com abordagens modernas e humanizadas para transtornos como ansiedade, depressão e esquizofrenia.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {treatmentModalities.map((modality, index) => (
            <AnimatedSection key={index}>
              <div className="bg-teal-900 p-8 rounded-lg shadow-xl text-center h-full flex flex-col items-center justify-start transform hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]">
                <div className="mb-6 flex justify-center items-center h-16 w-16 mx-auto bg-teal-800 rounded-full group-hover:bg-amber-500 transition-colors duration-300">
                  {modality.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{modality.title}</h3>
                <p className="text-gray-400 flex-grow">{modality.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
            <div className="bg-teal-900 p-8 md:p-12 rounded-lg shadow-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Suporte Contínuo e Estrutura Completa</h3>
                <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                No Hospital Rumo Certo, oferecemos uma estrutura completa e humanizada, focada no atendimento integral do paciente. Nossa abordagem multidisciplinar, com profissionais experientes disponíveis 24 horas por dia, garante o suporte necessário em cada fase do tratamento, promovendo uma recuperação total e eficaz.
                </p>
            </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default MentalHealth;