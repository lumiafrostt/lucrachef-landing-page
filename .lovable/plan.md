# Landing Page de Vendas — LucraChef

Landing page completa, mobile-first, em tema claro com verde como cor primária, focada em conversão para o plano Pro via Hotmart.

## Estrutura técnica

- **Rota única**: substituir o placeholder de `src/routes/index.tsx` por toda a landing page
- **Componentes**: criar componentes seccionais em `src/components/landing/` (Hero, Problema, Solucao, Depoimentos, Modulos, ParaQuem, Planos, FAQ, CTAFinal, Header, Footer) para manter o arquivo da rota limpo
- **Estilos**: ajustar tokens em `src/styles.css` para paleta verde (#22c55e como `--primary`), fundo branco, tipografia Inter (via Google Fonts no `__root.tsx`)
- **Metadados SEO**: atualizar `head()` da rota com title, description, og:title, og:description focados no LucraChef
- **Navegação**: header sticky com âncoras suaves (`#problema`, `#solucao`, `#modulos`, `#planos`, `#faq`) usando `scroll-behavior: smooth`
- **CTA Hotmart**: botões de compra apontam para um placeholder `https://pay.hotmart.com/SEU_LINK` (fácil de trocar depois)
- **Animações**: transições suaves (hover, fade) usando utilitários Tailwind e `tw-animate-css` já instalado
- **Acessibilidade**: contraste AA, foco visível, semântica correta (section, h1-h3, nav, footer)

## Seções (em ordem)

1. **Header sticky** — logo "LucraChef 🍰", links âncora, botão "Começar agora" (mobile: menu hambúrguer)

2. **Hero**
   - Headline: "Do zero aos R$ 5 mil por mês com a sua cozinha"
   - Subheadline: para confeiteiros e cozinheiros que querem transformar receitas em renda real
   - Badges: "+R$ 1.840 esta semana 🤑", "PWA — instale no celular"
   - CTA primário: "Quero começar agora"
   - CTA secundário: "Ver como funciona" (âncora #solucao)
   - Mockup do app (placeholder ilustrado em CSS simulando tela do home com bottom nav verde, similar ao print enviado)

3. **Problema** — grid 2x2 com 4 dores:
   - "Você vende, mas não sabe se está tendo lucro de verdade"
   - "Coloca preço no chute e ainda acha que está caro"
   - "Anota pedidos no caderno e perde o controle do dinheiro"
   - "Cansada de apertar o orçamento e quer uma renda extra de casa"

4. **Solução** — como o LucraChef resolve, com 5 cards de funcionalidades:
   - Calculadora de precificação
   - Controle de vendas e financeiro
   - Anotações de pedidos e receitas
   - Receitas lucrativas prontas
   - Notificações e histórico
   - Mockup ilustrado da calculadora ao lado

5. **Prova social** — 3 depoimentos em cards com avatar (inicial em círculo verde), nome, cidade, estrela, resultado destacado:
   - Juliana, 32, Belo Horizonte — "Aumentei meu lucro em 40% no primeiro mês só ajustando o preço"
   - Patrícia, 28, Recife — "Saí de R$ 800 para R$ 4.200/mês vendendo brigadeiro gourmet"
   - Camila, 41, Curitiba — "Finalmente sei quanto entra e quanto sai. Parei de trabalhar de graça"

6. **O que você vai aprender** — trilha "Do zero aos R$ 5 mil/mês" com os 7 módulos numerados, ícone, título e descrição curta:
   1. Fundamentos do Negócio
   2. Receitas Rápidas e Lucrativas
   3. Precificação e Custos
   4. iFood — Do Zero ao Primeiro Pedido
   5. WhatsApp e Vendas por Retirada
   6. Instagram e Presença Digital
   7. Meta Ads — Escalando suas Vendas

7. **Para quem é / Para quem não é** — duas colunas lado a lado (mobile: empilhado), ✅ vs ❌, 5 itens cada

8. **Planos e preços** — card único do plano Pro centralizado com badge "MAIS POPULAR":
   - Lista de tudo que inclui (ferramentas + 7 módulos + atualizações)
   - Preço com âncora (de/por), parcelamento
   - Botão grande "Quero o LucraChef Pro" → Hotmart
   - Selos: "Pagamento seguro Hotmart", "Acesso imediato"

9. **FAQ** — 5 perguntas em accordion (usando `<details>` nativo para evitar JS extra):
   - Funciona no meu celular?
   - Preciso ter experiência vendendo comida?
   - Como recebo o acesso após a compra?
   - Em quanto tempo vejo resultado?
   - Tem garantia se eu não gostar?

10. **CTA Final** — fundo verde, headline "Sua próxima venda lucrativa começa hoje 🍰", botão grande de compra, garantia de 7 dias com ícone de escudo

11. **Footer** — logo, links âncora, "© 2026 LucraChef", aviso de que o app é um PWA

## Estilo visual

- Cor primária: verde #22c55e; verde escuro #16a34a para hover; verde claro #dcfce7 para fundos sutis
- Fundo: branco; superfícies secundárias em cinza-verde muito claro
- Tipografia: Inter (Google Fonts) — pesos 400/600/700/800
- Cantos arredondados generosos (rounded-2xl), sombras suaves
- Emojis sutis nos títulos das seções (🍰 🤑 📊 🚀 ✅ ❌)
- Mobile-first, breakpoints md/lg para layout em colunas

## Nota sobre pagamento

Usaremos um link Hotmart placeholder. Depois que você me passar o link real do produto Pro, é só trocar a constante `HOTMART_URL` no código. (A integração nativa de pagamentos do Lovable não suporta Hotmart — ela é feita via link externo, que é exatamente o fluxo padrão da Hotmart.)
