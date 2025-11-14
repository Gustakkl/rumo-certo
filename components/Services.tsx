import React from 'react';
import AnimatedSection from './AnimatedSection';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const servicesData: Service[] = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "Alcoolismo",
      description: "Programas especializados para a superação da dependência do álcool, com suporte médico e terapêutico contínuo."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: "Dependência Química",
      description: "Tratamento completo para a dependência de substâncias, com foco na desintoxicação segura e reabilitação psicossocial."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      title: "Dependência Química Feminina",
      description: "Cuidado especializado para mulheres, em um ambiente seguro que aborda as particularidades da dependência feminina."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      title: "Depressão",
      description: "Suporte psiquiátrico e terapêutico para o tratamento da depressão e transtornos de humor associados."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a2.625 2.625 0 00-1.923-1.923L12 17.25l1.178-.648a2.625 2.625 0 001.923-1.923L16.25 12l.648 1.178a2.625 2.625 0 001.923 1.923L20.25 16l-1.178.648a2.625 2.625 0 00-1.923 1.923z" /></svg>,
      title: "Esquizofrenia",
      description: "Manejo e tratamento da esquizofrenia com acompanhamento psiquiátrico, visando a estabilidade e qualidade de vida."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
      title: "Farmacodependência",
      description: "Programas de desintoxicação e reabilitação para dependência de medicamentos, com supervisão médica rigorosa."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM10.5 1.5a9 9 0 100 18 9 9 0 000-18z" /><path strokeLinecap="round" strokeLinejoin="round" d="m6.75 6.75 8.25 8.25" /><path strokeLinecap="round" strokeLinejoin="round" d="m6.75 15 8.25-8.25" /></svg>,
      title: "Prevenção ao Suicídio",
      description: "Apoio emergencial e contínuo para pessoas em crise, com foco na valorização da vida e saúde mental."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a6.01 6.01 0 00-3.75 0M3.75 12h16.5c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H3.75c-.621 0-1.125.504-1.125 1.125v4.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
      title: "Saúde Mental",
      description: "Cuidado integral da saúde mental, tratando ansiedade, transtornos bipolares e outras condições com abordagens modernas."
    }
  ];

const Services: React.FC = () => {
  return (
    <section id="serviços" className="py-20 md:py-32 bg-teal-950">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Tratamentos</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Abordagens especializadas para cada jornada de recuperação, com cuidado, respeito e profissionalismo.
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <AnimatedSection key={index}>
              <div className="bg-teal-900 p-8 rounded-lg shadow-xl text-center h-full flex flex-col items-center justify-start transform hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]">
                <div className="mb-6 flex justify-center items-center h-16 w-16 mx-auto bg-teal-800 rounded-full group-hover:bg-amber-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 flex-grow">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;