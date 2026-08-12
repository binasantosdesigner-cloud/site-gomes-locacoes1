import { createFileRoute } from "@tanstack/react-router";
import { HardHat, Clock, Wrench, Check, Phone, MapPin, Menu, X, MessageCircle, Headphones } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { EquipmentSection } from "@/components/EquipmentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
});


function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b">
        <nav className="container-custom flex items-center justify-between h-20">
          <div className="flex items-center gap-2 font-bold text-2xl text-primary">
            <HardHat size={32} />
            <span>Gomes Locações</span>
          </div>
          
          <div className="hidden md:flex gap-8 font-medium">
            {["Início", "Equipamentos", "Diferenciais", "Contato"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">{link}</a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section id="início" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          alt="Construção Civil"
        />
        <div className="container-custom relative z-10 text-center text-white space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Locação de Equipamentos para Construção Civil em Rondonópolis
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light"
          >
            Sem burocracia, entrega rápida e frota revisada.
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, repeat: Infinity, repeatType: "reverse", duration: 2 }}
            href="https://wa.me/5566999101069" 
            className="inline-block whatsapp-button px-8 py-4 rounded-xl text-lg shadow-lg"
          >
            Fazer Orçamento Agora
          </motion.a>
        </div>
      </section>

      {/* Equipamentos */}
      <EquipmentSection />

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20">
        <div className="container-custom grid md:grid-cols-3 gap-12 text-center">
          {[
            { Icon: Clock, title: "Entrega Rápida", desc: "Na sua obra no prazo combinado." },
            { Icon: Wrench, title: "Equipamentos Revisados", desc: "Ferramentas prontas para o trabalho pesado." },
            { Icon: Check, title: "Locação sem Burocracia", desc: "Atendemos Pedreiros, Empreiteiros e Construtoras." }
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center">
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
            <h2 className="text-3xl font-extrabold sm:text-4xl text-slate-900">
              Dúvidas Frequentes sobre Locação de Equipamentos em Rondonópolis
            </h2>
            <p className="text-lg text-slate-600">
              Tudo o que você precisa saber para alugar máquinas e ferramentas para sua obra sem burocracia.
            </p>
          </header>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border rounded-xl px-4">
              <AccordionTrigger className="text-base font-bold text-slate-800 hover:no-underline py-6">
                Como funciona o aluguel de equipamentos para construção na Gomes Locações?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                O processo é simples e sem burocracia! Você escolhe o equipamento necessário (betoneira, martelete, compactador, andaime, etc.), entra em contato conosco pelo WhatsApp e enviamos o orçamento e as condições. Após a aprovação do cadastro rápido, combinamos a entrega direta no seu canteiro de obras em Rondonópolis e região.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border rounded-xl px-4">
              <AccordionTrigger className="text-base font-bold text-slate-800 hover:no-underline py-6">
                Vocês entregam os equipamentos direto na obra em Rondonópolis?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                Sim! Possuímos logística própria para entrega e retirada de máquinas e ferramentas em todos os bairros de Rondonópolis/MT e regiões vizinhas, garantindo pontualidade para que sua obra não fique parada.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border rounded-xl px-4">
              <AccordionTrigger className="text-base font-bold text-slate-800 hover:no-underline py-6">
                Quais são os períodos de locação disponíveis (diária, semanal, mensal)?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                Oferecemos total flexibilidade para o seu planejamento financeiro. Você pode alugar equipamentos por Diária, Semanal, Quinzenal ou Mensal. Quanto maior o período de locação, mais vantajosas são as condições.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border rounded-xl px-4">
              <AccordionTrigger className="text-base font-bold text-slate-800 hover:no-underline py-6">
                O que acontece se o equipamento apresentar algum defeito durante o uso na obra?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                Todos os nossos equipamentos passam por revisão técnica preventiva rigorosa antes de cada entrega. Caso ocorra qualquer imprevisto técnico durante a utilização, nossa equipe faz o atendimento e a substituição ágil do maquinário no local sem custos adicionais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border rounded-xl px-4">
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


161:       {/* CTA Banner Section */}
162:       <section className="bg-slate-900 border-t-4 border-[#FFCC00]">
163:         <div className="container-custom py-12 px-6">
164:           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
165:             {/* Left: Specialist Avatar */}
166:             <div className="flex-shrink-0">
167:               <div className="w-24 h-24 md:w-28 md:h-28 bg-[#FFCC00] rounded-full flex items-center justify-center shadow-xl relative">
168:                 <Headphones size={48} className="text-slate-900" />
169:                 <div className="absolute -bottom-1 -right-1 bg-[#25D366] w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center">
170:                   <div className="w-2 h-2 bg-white rounded-full animate-ping" />
171:                 </div>
172:               </div>
173:             </div>
174: 
175:             {/* Center: Commercial Text */}
176:             <div className="flex-1 text-center md:text-left space-y-3">
177:               <h3 className="text-2xl md:text-3xl font-bold text-white">
178:                 Fale com nosso Especialista
179:               </h3>
180:               <p className="text-slate-200 text-lg max-w-2xl leading-relaxed">
181:                 Não sabe qual equipamento escolher para o seu tipo de obra? Nossa equipe te ajuda a identificar a ferramenta ideal e passa o orçamento na hora.
182:               </p>
183:             </div>
184: 
185:             {/* Right: CTA Button */}
186:             <div className="flex-shrink-0 w-full md:w-auto">
187:               <motion.a
188:                 whileHover={{ scale: 1.05 }}
189:                 whileTap={{ scale: 0.95 }}
190:                 href="https://wa.me/5566999101069?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20para%20escolher%20o%20equipamento%20ideal%20para%20minha%20obra."
191:                 target="_blank"
192:                 rel="noopener noreferrer"
193:                 className="flex items-center justify-center gap-3 bg-[#FFCC00] text-slate-900 px-8 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
194:               >
195:                 <MessageCircle className="fill-current" />
196:                 Iniciar Conversa no WhatsApp
197:               </motion.a>
198:             </div>
199:           </div>
200:         </div>
201:       </section>
202: 
      <footer className="bg-foreground text-background py-16">
        <div className="container-custom grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="font-bold text-xl flex items-center gap-2"><HardHat /> Gomes Locações</h4>
            <p className="text-muted-foreground">O maquinário certo para a sua obra não parar.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contato</h4>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={20} />
              Rua Dom Pedro II, 1540 - Jd. Mato Grosso, Rondonópolis - MT
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={20} />
              (66) 99910-1069
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Links</h4>
            <a href="#" className="block hover:underline">Política de Privacidade</a>
            <a href="#" className="block hover:underline">Termos de Locação</a>
          </div>
        </div>
        <div className="container-custom mt-12 pt-8 border-t border-white/10 text-center text-muted-foreground">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:text-base">
            <span>© 2026 Gomes Locações. Todos os direitos reservados.</span>
            <span className="hidden md:inline">|</span>
            <span className="md:hidden">•</span>
            <span>
              Desenvolvido por:{" "}
              <a 
                href="https://boxcriativa.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-4"
              >
                Box Criativa
              </a>
            </span>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5566999101069?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20loca%C3%A7%C3%A3o%20de%20equipamentos."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform"
        aria-label="Falar no WhatsApp"
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
