import { Clock, Wrench, Check, Phone, MapPin, Menu, X, MessageCircle, Headphones } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EquipmentSection } from "@/components/EquipmentSection";
import { LegalModal } from "@/components/LegalModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [hideCTAForSpecialist, setHideCTAForSpecialist] = useState(false);
  const [legalModal, setLegalModal] = useState<"privacidade" | "termos" | null>(null);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deployDate = new Date().toLocaleDateString('pt-BR');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowStickyCTA(scrollY > 500);

      const specialistSection = document.getElementById('contato-especialista');
      if (specialistSection) {
        const rect = specialistSection.getBoundingClientRect();
        setHideCTAForSpecialist(rect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const privacyPolicy = `POLÍTICA DE PRIVACIDADE

Última atualização: ${deployDate}

A Gomes Locações, com sede na Rua Dom Pedro II, 1540 - Jardim Mato Grosso, Rondonópolis - MT, CEP 78739-752, respeita a privacidade dos visitantes deste site e está comprometida com a proteção de dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).

1. Quais dados coletamos
Este site pode coletar: dados de navegação (páginas visitadas, tempo de permanência) através de ferramentas de análise e publicidade, como o Meta Pixel (Facebook/Instagram Ads); dados fornecidos voluntariamente quando você entra em contato via WhatsApp (nome, telefone, mensagem).

2. Como usamos seus dados
Os dados coletados são utilizados para: responder a solicitações de orçamento; melhorar a experiência de navegação no site; veicular anúncios direcionados em redes sociais (Meta Ads).

3. Compartilhamento de dados
Não vendemos ou compartilhamos seus dados pessoais com terceiros, exceto quando necessário para prestação do serviço solicitado (ex: emissão de nota fiscal) ou por exigência legal.

4. Cookies e ferramentas de rastreamento
Este site utiliza o Meta Pixel para mensuração de campanhas publicitárias. Você pode gerenciar suas preferências de cookies e anúncios diretamente nas configurações da sua conta Meta/Facebook.

5. Seus direitos
Você pode, a qualquer momento, solicitar acesso, correção ou exclusão dos seus dados pessoais entrando em contato pelo telefone (66) 99910-1069 ou pelo WhatsApp.

6. Contato
Para dúvidas sobre esta política, entre em contato: (66) 99910-1069.`;

  const rentalTerms = `TERMOS DE LOCAÇÃO

Última atualização: ${deployDate}

Estes termos regem a locação de equipamentos oferecida pela Gomes Locações, localizada na Rua Dom Pedro II, 1540 - Jardim Mato Grosso, Rondonópolis - MT.

1. Cadastro
A locação está disponível para Pessoa Física (CPF) e Pessoa Jurídica (CNPJ), mediante apresentação de documento de identificação válido.

2. Períodos de locação
Os equipamentos podem ser alugados nas modalidades diária, semanal ou mensal, conforme disponibilidade de estoque.

3. Entrega e retirada
A entrega é realizada em prazo de até 2 horas, sujeito à disponibilidade de estoque e região de entrega, conforme informado no momento do orçamento. A retirada também pode ser feita diretamente na loja.

4. Estado dos equipamentos
Todos os equipamentos passam por checklist de revisão técnica antes de cada locação. Em caso de defeito de fabricação ou mau funcionamento durante o uso normal, a Gomes Locações se compromete a realizar substituição ou reparo.

5. Responsabilidade do locatário
O locatário é responsável pela guarda e uso adequado do equipamento durante o período de locação, respondendo por danos causados por uso indevido, negligência ou mau uso.

6. Devolução
O equipamento deve ser devolvido na data e condições combinadas no momento da locação. Atrasos podem gerar cobrança proporcional adicional, a ser informada no momento da contratação.

7. Cancelamento
Condições de cancelamento e eventuais taxas serão informadas diretamente no momento do orçamento/negociação via WhatsApp.`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b">
        <nav className="container-custom flex items-center justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="cursor-pointer outline-hidden flex items-center"
              aria-label="Voltar ao topo"
            >
              <img src="/imagens/logo-1-gomes-locacoes.webp" alt="Gomes Locações" className="h-12 md:h-14 w-auto" />
            </button>
          </div>
          
          <div className="hidden md:flex gap-8 font-medium">
            {["Início", "Equipamentos", "Diferenciais", "Contato"].map((link) => {
              const href = link === "Contato" ? "#contato-especialista" : `#${link.toLowerCase()}`;
              return (
                <a key={link} href={href} className="hover:text-[#0E33AD] transition-colors">{link}</a>
              );
            })}
          </div>

          <button 
            className="md:hidden p-2 -mr-2 outline-hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b overflow-hidden"
            >
              <div className="container-custom py-4 flex flex-col gap-4 font-medium">
                {["Início", "Equipamentos", "Diferenciais", "Contato"].map((link) => {
                  const href = link === "Contato" ? "#contato-especialista" : `#${link.toLowerCase()}`;
                  return (
                    <a 
                      key={link} 
                      href={href} 
                      className="py-2 hover:text-[#0E33AD] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="overflow-x-hidden">

      {/* Hero */}
      <section id="início" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <picture>
            <source media="(max-width: 767px)" srcSet="/imagens/banner-hero-mobile-750x1000.webp" />
            <source media="(max-width: 1023px)" srcSet="/imagens/banner-hero-tablet-1024x768.webp" />
            <img 
              src="/imagens/banner-hero-desktop-1920x1080.webp" 
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: "center" 
              }}
              alt="Trabalhador da construção operando serra circular"
            />
          </picture>
        </div>
        
        <div className="container-custom relative z-10 text-white space-y-6 flex flex-col items-start text-left md:ml-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-tight max-w-[32ch] text-[#FFD000]"
          >
            Locação de Equipamentos para Construção Civil em Rondonópolis
          </motion.h1>
          <div className="space-y-4 flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-light max-w-[65ch]"
            >
              Entrega em até 2h* na sua obra, mediante disponibilidade. Frota revisada e pronta pra uso, sem burocracia no cadastro.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs md:text-sm text-white/80"
            >
              *Prazo sujeito à disponibilidade de estoque e região de entrega.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            href="https://wa.me/5566999101069" 
            onClick={() => {
              if (window.dataLayer) {
                window.dataLayer.push({
                  event: 'generate_lead',
                  lead_origem: 'WhatsApp_Hero'
                });
              }
            }}
            className="inline-block whatsapp-button px-8 py-4 rounded-xl text-lg shadow-lg hover:scale-105"
          >
            Fazer Orçamento Agora
          </motion.a>
        </div>
      </section>

      {/* Equipamentos */}
      <EquipmentSection />

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 bg-[#F5F6FA]">
        <div className="container-custom grid md:grid-cols-3 gap-12 text-center">
          {[
            { Icon: Clock, title: "Entrega Rápida", desc: <>Equipamento na sua obra em até 2h,{" "}<br className="hidden md:block" />mediante disponibilidade.</> },
            { Icon: Wrench, title: "Revisão Técnica", desc: <>Toda máquina passa por checklist{" "}<br className="hidden md:block" />antes de sair da loja.</> },
            { Icon: Check, title: "Cadastro sem Burocracia", desc: <>Atendemos pedreiro, empreiteira{" "}<br className="hidden md:block" />ou construtora, PF ou PJ.</> }
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-[#0E33AD]/10 text-[#0E33AD] rounded-full flex items-center justify-center">
                <item.Icon size={32} />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom max-w-4xl">
          <header className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-slate-900 mx-auto max-w-[35ch]">
              Dúvidas Frequentes sobre Locação de Equipamentos em Rondonópolis
              </h2>
            <p className="text-lg text-slate-600 mx-auto">
              Tudo o que você precisa saber para alugar máquinas{" "}<br className="hidden md:block" /> e ferramentas para sua obra sem burocracia.
            </p>
          </header>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-[#0E33AD]/20 rounded-xl px-4 hover:border-[#0E33AD] transition-colors">
              <AccordionTrigger className="text-base font-bold text-slate-800 hover:no-underline py-6">
                Como funciona o aluguel de equipamentos para construção na Gomes Locações?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                O processo é simples e sem burocracia! Você escolhe o equipamento necessário (betoneira, martelete, compactador, andaime, etc.), entra em contato conosco pelo WhatsApp e enviamos o orçamento e as condições. Após a aprovação do cadastro rápido, combinamos a entrega direta no seu canteiro de obras em Rondonópolis e região.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-[#0E33AD]/20 rounded-xl px-4 hover:border-[#0E33AD] transition-colors">
              <AccordionTrigger className="text-base font-bold text-slate-800 hover:no-underline py-6">
                Vocês entregam os equipamentos direto na obra em Rondonópolis?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                Sim! Possuímos logística própria para entrega e retirada de máquinas e ferramentas em todos os bairros de Rondonópolis/MT e regiões vizinhas, garantindo pontualidade para que sua obra não fique parada.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-[#0E33AD]/20 rounded-xl px-4 hover:border-[#0E33AD] transition-colors">
              <AccordionTrigger className="text-base font-bold text-slate-800 hover:no-underline py-6">
                Quais são os períodos de locação disponíveis (diária, semanal, mensal)?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                Oferecemos total flexibilidade para o seu planejamento financeiro. Você pode alugar equipamentos por Diária, Semanal, Quinzenal ou Mensal. Quanto maior o período de locação, mais vantajosas são as condições.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-[#0E33AD]/20 rounded-xl px-4 hover:border-[#0E33AD] transition-colors">
              <AccordionTrigger className="text-base font-bold text-slate-800 hover:no-underline py-6">
                O que acontece se o equipamento apresentar algum defeito durante o uso na obra?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                Todos os nossos equipamentos passam por revisão técnica preventiva rigorosa antes de cada entrega. Caso ocorra qualquer imprevisto técnico durante a utilização, nossa equipe faz o atendimento e a substituição ágil do maquinário no local sem custos adicionais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border border-[#0E33AD]/20 rounded-xl px-4 hover:border-[#0E33AD] transition-colors">
              <AccordionTrigger className="text-base font-bold text-slate-800 hover:no-underline py-6">
                Pessoa Física (CPF) pode alugar ferramentas ou somente Empresas (CNPJ)?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                Atendemos tanto Pessoa Física (pedreiros, mestres de obras, proprietários) quanto Pessoa Jurídica (construtoras e empreiteiras). Basta apresentar documento de identificação e comprovante de endereço para análise cadastral rápida.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section id="contato-especialista" className="bg-[#0E33AD] border-t-4 border-[#FFD000]">
        <div className="container-custom py-12 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-[#FFD000] rounded-full flex items-center justify-center shadow-xl relative text-[#1A1A1A]">
                <Headphones size={48} />
                <div className="absolute -bottom-1 -right-1 bg-[#25D366] w-8 h-8 rounded-full border-4 border-[#0E33AD] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-white max-w-[25ch]">
                Fale com nosso Especialista
              </h3>
              <p className="text-white/80 text-lg max-w-[60ch] leading-relaxed">
                Não sabe qual equipamento sua obra precisa? Fala com a gente agora — te ajudamos a escolher e já mandamos o orçamento.
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5566999101069?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20escolher%20o%20equipamento%20ideal%20para%20minha%20obra."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (window.dataLayer) {
                    window.dataLayer.push({
                      event: 'generate_lead',
                      lead_origem: 'WhatsApp_Banner'
                    });
                  }
                }}
                className="flex items-center justify-center gap-3 bg-[#FFD000] text-[#1A1A1A] px-8 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all w-full md:w-auto hover:scale-105"
              >
                <MessageCircle className="fill-current" />
                Iniciar Conversa no WhatsApp
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#FFAA00] text-[#1A1A1A] py-16 mt-[-1px]">
        <div className="container-custom grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <button 
              onClick={scrollToTop}
              className="cursor-pointer outline-hidden flex items-center"
              aria-label="Voltar ao topo"
            >
              <img src="/imagens/logo-2-gomes-locacoes.webp" alt="Gomes Locações" className="h-12 w-auto" />
            </button>
            <p className="text-[#1A1A1A]/80">O maquinário certo para a sua obra não parar.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#0E33AD]">Contato</h4>
            <div className="flex items-start gap-2 text-[#1A1A1A]/80">
              <MapPin size={20} className="text-[#0E33AD] shrink-0 mt-1" />
              <div className="flex flex-col gap-2">
                <span>Rua Dom Pedro II, 1540 - Jd. Mato Grosso, Rondonópolis - MT</span>
                <a 
                  href="https://maps.app.goo.gl/n8YcKts7DsXp93V98" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#0E33AD] hover:underline underline-offset-4 w-fit"
                  aria-label="Ver como chegar no Google Maps"
                >
                  Como chegar →
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#1A1A1A]/80">
              <Phone size={20} className="text-[#0E33AD]" />
              <span className="font-bold">(66) 99910-1069</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#0E33AD]">Links</h4>
            <button 
              onClick={() => setLegalModal("privacidade")}
              className="block hover:text-[#0E33AD] transition-colors cursor-pointer text-left w-full"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={() => setLegalModal("termos")}
              className="block hover:text-[#0E33AD] transition-colors cursor-pointer text-left w-full"
            >
              Termos de Locação
            </button>
          </div>
        </div>
        <div className="container-custom mt-12 pt-8 border-t border-[#1A1A1A]/10 text-center text-[#1A1A1A]/60">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs opacity-70">
            <span>© 2026 Gomes Locações. Todos os direitos reservados.</span>
            <span className="hidden md:inline">|</span>
            <span className="md:hidden">•</span>
            <span>
              Desenvolvido por:{" "}
              <a 
                href="https://boxcriativa.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#0E33AD] transition-colors underline underline-offset-4 font-medium"
              >
                Box Criativa
              </a>
            </span>
          </div>
        </div>

        <LegalModal 
          isOpen={legalModal === "privacidade"}
          onOpenChange={(open) => !open && setLegalModal(null)}
          title="Política de Privacidade"
          content={privacyPolicy}
        />
        <LegalModal 
          isOpen={legalModal === "termos"}
          onOpenChange={(open) => !open && setLegalModal(null)}
          title="Termos de Locação"
          content={rentalTerms}
        />
      </footer>
      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showStickyCTA && !hideCTAForSpecialist && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-background/80 backdrop-blur-sm p-4 border-t"
          >
            <a
              href="https://wa.me/5566999101069?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20equipamento%20para%20minha%20obra."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (window.dataLayer) {
                  window.dataLayer.push({
                    event: 'generate_lead',
                    lead_origem: 'WhatsApp_Mobile_Sticky'
                  });
                }
              }}
              className="flex items-center justify-center gap-2 w-full bg-[#FFD000] text-[#1A1A1A] py-4 px-6 rounded-full font-bold shadow-2xl active:scale-95 transition-transform"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>Orçar Equipamento</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20 md:hidden" />

      <motion.a
        href="https://wa.me/5566999101069?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20loca%C3%A7%C3%A3o%20de%20equipamentos."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: (showStickyCTA && !hideCTAForSpecialist) ? 0 : 1, 
          opacity: (showStickyCTA && !hideCTAForSpecialist) ? 0 : 1 
        }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hidden md:flex"
        aria-label="Falar no WhatsApp"
        onClick={() => {
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'generate_lead',
              lead_origem: 'WhatsApp_Flutuante'
            });
          }
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MessageCircle size={32} fill="currentColor" />
        </motion.div>
      </motion.a>
    </div>
  );
}
