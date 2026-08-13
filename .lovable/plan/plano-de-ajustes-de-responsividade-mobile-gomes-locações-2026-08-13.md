# Plano de Ajustes de Responsividade Mobile - Gomes Locações

Este plano detalha as alterações necessárias para otimizar a experiência mobile do site da Gomes Locações, focando em usabilidade (UI/UX) e conversão, sem impactar a versão desktop.

## Alterações Técnicas

### 1. Seção de Equipamentos (`src/components/EquipmentSection.tsx`)
- **Seção "Concretagem e Altura"**: Implementar um carrossel horizontal nativo via CSS para mobile.
  - Usar `flex overflow-x-auto` com `scroll-snap-type: x mandatory`.
  - Definir largura dos cards para `85vw` no mobile para criar o efeito de "espiada" (peek) do próximo item.
  - Adicionar indicadores de navegação (dots) discretos abaixo do carrossel.
- **Seções "Solo e Energia" e "Acabamento e Utilidades"**: Alterar o grid de 1 coluna para 2 colunas no mobile (`grid-cols-2`).
  - Ajustar paddings internos dos cards para garantir que o conteúdo caiba proporcionalmente.
  - Configurar enquadramento da imagem e tamanho do texto para o novo layout compacto.

### 2. Novo Componente CTA Flutuante de Scroll
- Criar um componente de botão fixo que aparece dinamicamente após o scroll da seção Hero.
- **Design**: Formato "pill" (arredondado) com fundo amarelo (#FFD000), texto escuro e ícone do WhatsApp.
- **Comportamento**:
  - Visível apenas em mobile.
  - Monitorar o scroll (ex: > 400px) para exibir o botão.
  - Lógica de ocultação: Ocultar o botão fixo quando o usuário chegar na seção "Fale com nosso Especialista" para evitar redundância.
  - Substituir/Gerenciar o botão flutuante circular atual em mobile para evitar poluição visual.

### 3. Ajustes de Estilo Global
- Garantir que todas as alterações mobile sejam isoladas via classes utilitárias do Tailwind (ex: `block md:hidden` ou `grid-cols-2 sm:grid-cols-1`).

## Checklist de Validação
- [ ] Carrossel da Seção 1 com scroll suave e alinhamento correto (snap).
- [ ] Visualização em 2 colunas nas Seções 2 e 3 sem quebras de texto.
- [ ] CTA fixo aparecendo/desaparecendo nos pontos de scroll corretos.
- [ ] Links do WhatsApp com as mensagens pré-preenchidas solicitadas.
- [ ] Versão Desktop 100% preservada.
