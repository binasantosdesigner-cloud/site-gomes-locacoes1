import { MessageCircle, CalendarDays, CalendarRange, CalendarClock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const WHATSAPP = "https://wa.me/5566999101069";

export interface Equipment {
  name: string;
  image: string;
}

const buildLink = (name: string) =>
  `${WHATSAPP}?text=${encodeURIComponent(`Olá, gostaria de orçar o aluguel de ${name}.`)}`;

const BLOCK_1: Equipment[] = [
  { name: "Martelete Rompedor", image: "/imagens/Martelete.jpg" },
  { name: "Betoneira", image: "/imagens/Betoneira.jpg" },
  { name: "Andaimes", image: "/imagens/Andaime.jpg" },
];

const BLOCK_2: Equipment[] = [
  { name: "Compactador de Solo", image: "/imagens/Compactador de solo.jpg" },
  { name: "Placa Vibratória", image: "/imagens/Placa vibratória.jpg" },
  { name: "Gerador", image: "/imagens/Gerador.jpg" },
];

const BLOCK_3: Equipment[] = [
  { name: "Roçadeira", image: "/imagens/Roçadeira.jpg" },
  { name: "Lixadeira Telescópica", image: "/imagens/Lixadeira girafa para parede.jpg" },
  { name: "Guincho de Coluna", image: "/imagens/Guincho de coluna.jpg" },
];

function EquipmentCard({ item }: { item: Equipment }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex aspect-square items-center justify-center bg-[#F8FAFC] p-6 overflow-hidden">
        <img
          src={item.image}
          alt={`Aluguel de ${item.name} em Rondonópolis - Gomes Locações`}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800";
            target.onerror = null;
          }}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <h3 className="text-base font-semibold text-slate-800 leading-tight">
          {item.name}
        </h3>
        <a
          href={buildLink(item.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl px-4 text-base font-bold shadow-sm"
        >
          <MessageCircle size={22} aria-hidden />
          Orçar este equipamento
        </a>
      </div>
    </motion.article>
  );
}

function EquipmentBlock({ title, items }: { title: string; items: Equipment[] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <EquipmentCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function Banner({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl bg-foreground px-6 py-10 text-background sm:px-10", className)}>
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <h3 className="text-2xl font-extrabold sm:text-3xl">{title}</h3>
        <p className="text-base opacity-80 sm:text-lg">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

export function EquipmentSection() {
  return (
    <section id="equipamentos" className="py-16 sm:py-20">
      <div className="container-custom space-y-14">
        <header className="space-y-3 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-[#0E33AD]">Equipamentos com Pronta Entrega</h2>
          <p className="text-muted-foreground">Máquinas revisadas e testadas antes de cada locação. Retire na loja ou receba direto no canteiro de obras.</p>
        </header>

        <EquipmentBlock title="Concretagem e Altura" items={BLOCK_1} />

        <Banner
          title="Atraso de equipamento gera atraso de obra — e isso custa caro."
          subtitle="Nossa frota fica pronta pra retirada imediata. Ligou, confirmou, equipamento na sua obra em até 2h*."
          className="bg-[#0E33AD]"
        >
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent("Olá, gostaria de fazer um orçamento.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button mt-2 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-8"
          >
            <MessageCircle size={20} aria-hidden />
            Fazer Orçamento Agora
          </a>
        </Banner>

        <EquipmentBlock title="Solo e Energia" items={BLOCK_2} />


        <EquipmentBlock title="Acabamento e Utilidades" items={BLOCK_3} />

        <section className="py-12 bg-[#F5F6FA] rounded-3xl">
          <div className="container-custom space-y-8">
            <header className="space-y-3 text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl text-[#0E33AD]">Diária, Semanal ou Mensal — você escolhe.</h2>
              <p className="text-muted-foreground">Cadastro simples para Pessoa Física e Jurídica, aprovação no mesmo dia.</p>
            </header>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { Icon: CalendarDays, label: "Diária" },
                { Icon: CalendarRange, label: "Semanal" },
                { Icon: CalendarClock, label: "Mensal" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center justify-center gap-3 rounded-xl bg-[#FFD000] px-4 py-4 font-bold text-[#1A1A1A] shadow-sm">
                  <Icon size={24} aria-hidden />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0E33AD] rounded-3xl text-white px-6 sm:px-10">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h3 className="text-2xl font-extrabold sm:text-3xl">Garantia de Produtividade na Sua Obra</h3>
            <p className="text-base opacity-90 sm:text-lg">Se o equipamento apresentar defeito, substituímos na hora. Assistência técnica ágil pra sua obra não parar por nossa causa.</p>
            <div className="flex justify-center text-[#FFD000]">
              <ShieldCheck size={48} aria-hidden />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
