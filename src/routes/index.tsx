import { createFileRoute } from "@tanstack/react-router";
import { HardHat, Clock, Wrench, Check, Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { EquipmentSection } from "@/components/EquipmentSection";

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

      {/* Footer */}
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
        <div className="container-custom mt-12 pt-8 border-t border-white/10 text-center text-muted-foreground space-y-2">
          <p>© 2026 Gomes Locações. Todos os direitos reservados.</p>
          <p className="text-sm opacity-70">
            Desenvolvido por:{" "}
            <a 
              href="https://boxcriativa.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Box Criativa
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
