import React from 'react';
import { PlaneTakeoff, Users, Wrench, ShieldCheck, BarChart3, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <PlaneTakeoff className="icon" />,
    title: "Gestão Completa de Aeronaves",
    description: "Cadastre matrículas, modelos, fabricantes, números de série, proprietários e histórico completo.",
  },
  {
    icon: <Wrench className="icon" />,
    title: "Controle Total de Manutenções",
    description: "Agende preventivas, registre corretivas, rastreie peças e gere relatórios detalhados.",
  },
  {
    icon: <Users className="icon" />,
    title: "Comunicação Eficaz com Clientes",
    description: "Notifique sobre revisões futuras, vencimento de componentes e requisitos regulatórios.",
  },
  {
    icon: <ShieldCheck className="icon" />,
    title: "Conformidade ANAC Garantida",
    description: "Mantenha-se atualizado com Service Bulletins, Airworthiness Directives e documentação técnica.",
  },
  {
    icon: <BarChart3 className="icon" />,
    title: "Dashboards e Relatórios Inteligentes",
    description: "Visualize dados cruciais, como revisões pendentes e componentes próximos do vencimento.",
  },
  {
    icon: <MessageSquare className="icon" />,
    title: "Integração e Acessibilidade",
    description: "Acesse informações importantes de qualquer lugar, com integrações pensadas para sua oficina.",
  },
];

function App() {
  const handleAccessSystem = () => {
    alert("Navegar para Dashboard (implemente a navegação aqui)");
  };

  const handleSignup = () => {
    alert("Navegar para Criar Conta (implemente a navegação aqui)");
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom right, #f0f4f8, #d9e2ec)', 
      color: '#333', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 20px', textAlign: 'center', position: 'relative' }}>
        <PlaneTakeoff size={96} color="#3b82f6" style={{ margin: '0 auto 24px', animation: 'pulse 2s infinite' }} />
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '24px' }}>
          Hangar House <span style={{ color: '#3b82f6' }}>Pro</span>
        </h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '600px', margin: '0 auto 40px', color: '#555' }}>
          A solução definitiva para a gestão inteligente e eficiente da manutenção de aeronaves. Otimize suas operações, garanta a conformidade e eleve a segurança.
        </p>
        <div>
          <button 
            onClick={handleAccessSystem} 
            style={{
              padding: '20px 48px',
              fontSize: '1.2rem',
              marginRight: '16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(59, 130, 246, 0.4)',
              transition: 'box-shadow 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 12px rgba(59, 130, 246, 0.6)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.4)'}
          >
            Acessar o Sistema
          </button>
          <button 
            onClick={handleSignup}
            style={{
              padding: '20px 48px',
              fontSize: '1.2rem',
              backgroundColor: 'transparent',
              border: '2px solid #3b82f6',
              color: '#3b82f6',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Criar Conta
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '64px 20px', backgroundColor: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '16px' }}>
          Funcionalidades Poderosas
        </h2>
        <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '48px', color: '#666', maxWidth: '500px', margin: '0 auto' }}>
          Descubra como o AeroMaintenance Pro pode transformar a gestão da sua oficina.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
          {features.map(({icon, title, description}, i) => (
            <div key={i} style={{ 
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
              borderRadius: '12px', 
              padding: '32px', 
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'default'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                marginBottom: '20px', 
                height: '80px', 
                width: '80px', 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                color: '#3b82f6', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
              }}>
                {icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: '600' }}>{title}</h3>
              <p style={{ color: '#555' }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ backgroundColor: '#3b82f6', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '24px' }}>
          Pronto para Decolar com Eficiência?
        </h2>
        <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto 40px' }}>
          Junte-se a oficinas que já estão revolucionando sua gestão de manutenção com o AeroMaintenance Pro.
        </p>
        <button
          onClick={handleSignup}
          style={{
            padding: '20px 60px',
            fontSize: '1.3rem',
            backgroundColor: 'white',
            color: '#3b82f6',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '700',
            boxShadow: '0 6px 15px rgba(255,255,255,0.5)',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e0e7ff'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
        >
          Comece Agora Gratuitamente
        </button>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1e293b', color: '#cbd5e1', padding: '40px 20px', textAlign: 'center' }}>
        <PlaneTakeoff size={40} style={{ margin: '0 auto 12px', color: '#3b82f6' }} />
        <p>&copy; {new Date().getFullYear()} AeroMaintenance Pro. Todos os direitos reservados.</p>
        <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>Simplificando a manutenção aeronáutica.</p>
      </footer>

      {/* CSS Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export default App;
