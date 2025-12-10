## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Arquitetura](#arquitetura)
4. [Guia de Cores](#guia-de-cores)
5. [Componentes](#componentes)
6. [JavaScript - Funcionalidades](#javascript---funcionalidades)
7. [Responsividade](#responsividade)
8. [Como Fazer Alterações Comuns](#como-fazer-alterações-comuns)


## 🎯 Visão Geral

Landing page responsiva para psicóloga clínica. O site apresenta:
- Navegação fixa com menu mobile
- Seção hero com call-to-action
- Seção sobre a psicóloga
- Catálogo de serviços
- Carrossel de depoimentos
- Formulário de contato
- Footer com informações de contato

**Stack tecnológico:**
- HTML5 semântico
- CSS3 (Flexbox, Grid, Animações)
- JavaScript Vanilla (sem dependências externas)
- Imagens do Unsplash (CDN)

---

## 📁 Estrutura do Projeto

```
landingpage_psi/
├── index.html              # Arquivo HTML principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript interativo
└── DOCUMENTACAO_TECNICA.md # Esta documentação
```

### Tamanho dos arquivos:
- **index.html**: ~15KB
- **styles.css**: ~18KB
- **script.js**: ~6KB


## 🏗️ Arquitetura

### HTML (index.html)
Estrutura semântica com as seguintes seções:

```
<body>
  ├── <nav> Navbar
  ├── <section> Hero
  ├── <section> About
  ├── <section> Services
  ├── <section> Testimonials
  ├── <section> Contact
  └── <footer> Footer
</body>
```

### CSS (styles.css)
Organização por componentes:
- Reset e variáveis globais
- Tipografia
- Botões
- Navbar
- Hero
- About
- Services
- Testimonials
- Contact
- Footer
- Animações
- Media queries

### JavaScript (script.js)
Funcionalidades implementadas:
- Toggle de menu mobile
- Efeito scroll na navbar
- Carrossel de depoimentos (auto-rotação)
- Formulário de contato
- Scroll suave para âncoras
- Animações de entrada ao rolar

---

## 🎨 Guia de Cores

### Cores Principais

A cor primária da marca é **Teal #14b8a6**. Abaixo está o mapa completo de todas as cores utilizadas no site e onde modificá-las:

#### ✅ COR PRIMÁRIA (Teal)
**Valor:** `#14b8a6`  
**Cor secundária (hover):** `#0d9488`

**Locais onde alterar em `styles.css`:**

| Elemento | Linha aprox. | Descrição |
|----------|-------------|-----------|
| `.highlight` | 73 | Texto destacado em títulos |
| `.btn-primary` | 90 | Botões primários (fundo) |
| `.btn-primary:hover` | 95 | Botões ao passar mouse |
| `.logo-circle` (gradiente) | 168 | Ícone do logo na navbar |
| `.logo-specialty` | 185 | Texto "Oliveira" no logo |
| `.nav-link:hover` | 208 | Links da navegação ao hover |
| `.mobile-menu-btn:hover` | 225 | Botão mobile ao hover |
| `.hero-badge` | 279 | Badge do hero |
| `.indicator-number` | 334 | Números dos indicadores de confiança |
| `.section-badge` | 443 | Badges das seções |
| `.service-card:hover h3` | 686 | Títulos dos serviços ao hover |
| `.service-card-1` (--card-color-1) | 670 | Card de Terapia Individual |
| `.service-card-5` (--card-color-1) | 686 | Card de Mindfulness |
| `.indicator-dot.active` | 877 | Dots do carrossel de depoimentos |
| `.contact-icon` (background) | 947 | Ícones de contato (fundo) |
| `.contact-icon svg` | 954 | Ícones de contato (cor) |
| `.social-icon:hover` | 1017 | Redes sociais ao hover |
| `.heart-icon` | 1135 | Ícone de coração no footer |
| `.footer-nav a:hover` | 1123 | Links do footer ao hover |

---

### Cores Secundárias

#### 🟠 Orange/Amber
**Valores:**
- `#f59e0b` (Amber)
- `#f97316` (Orange)
- `#fb9460` (Decoração no hero)

**Locais:**
- `.decoration-2` (linha ~329): Elemento decorativo (blur) no hero
- `.service-card-2` (linha ~674): Card de Terapia de Casal

#### 🔴 Rose/Pink
**Valores:**
- `#f43f5e` (Rose)
- `#ec4899` (Pink)

**Locais:**
- `.service-card-3` (linha ~678): Card de Orientação Parental

#### 🟣 Indigo/Purple
**Valores:**
- `#6366f1` (Indigo)
- `#a855f7` (Purple)

**Locais:**
- `.service-card-4` (linha ~682): Card de Psicologia Organizacional

#### 🟢 Green
**Valores:**
- `#10b981` (Emerald)

**Locais:**
- `.service-card-5` (--card-color-2) (linha ~686): Card de Mindfulness

#### 🔵 Cyan/Blue
**Valores:**
- `#06b6d4` (Cyan)
- `#3b82f6` (Blue)

**Locais:**
- `.service-card-6` (linha ~690): Card de Grupos Terapêuticos

---

### Cores Neutras

| Cor | Valor | Uso |
|-----|-------|-----|
| Preto | `#111` / `#333` | Textos principais |
| Cinza escuro | `#4b5563` | Textos de depoimentos |
| Cinza médio | `#666` | Textos secundários |
| Cinza claro | `#999` | Textos terciários |
| Cinza muito claro | `#ddd` / `#f0f0f0` | Bordas e fundos |
| Branco | `#fff` | Fundos principais |
| Fundo página | `#f5f5f0` | Fundo das seções |

---

### Cores de Componentes Específicos

#### Navbar
- **Scrolled background:** `rgba(255, 255, 255, 0.95)` com backdrop blur

#### Hero
- **Gradiente de fundo:** 
  ```css
  linear-gradient(to bottom right, #f5f5f0, #fff, #e8f5f3)
  ```
- **Quote card background:** `#134e4a` (verde escuro)

#### Services
- **Fundo:** `linear-gradient(to bottom, #f5f5f0, white)`

#### Footer
- **Background:** `#1f2937` (cinza escuro)
- **Texto secundário:** `#9ca3af`
- **Borda:** `#374151`

---

## 🧩 Componentes

### 1. Navbar Responsiva
**Localização em HTML:** Linhas 13-68  
**Localização em CSS:** Linhas 143-247

**Características:**
- Logo com gradiente teal
- Menu desktop (escondido em mobile)
- Menu mobile com toggle
- Efeito de sombra ao fazer scroll

**Pontos de customização:**
- Logo texto: Editar em `<a class="navbar-logo">`
- Links de navegação: Adicionar em `.nav-links`
- Largura máxima: Modificar em `.container`

---

### 2. Hero Section
**Localização em HTML:** Linhas 70-155  
**Localização em CSS:** Linhas 249-363

**Características:**
- Título grande e impactante
- Imagem responsiva
- Dois botões de CTA (Call-to-Action)
- Indicadores de confiança (anos, pacientes, satisfação)
- Elementos decorativos com blur

**Pontos de customização:**
- Textos: Editar diretamente no HTML
- Imagem: Trocar URL em `<img src="">`
- Tamanho do título: Linha 280 (h1 com 3.5rem)
- Decorações: Linhas 326-334

---

### 3. Cards de Serviços
**Localização em HTML:** Linhas 233-297  
**Localização em CSS:** Linhas 631-709

**Características:**
- Grid responsivo (1 coluna mobile, 2 tablet, 3 desktop)
- Ícones com gradientes coloridos
- Efeito hover com barra de cor
- Sombras e animações

**Personalizando cores dos cards:**
```css
.service-card-X {
    --card-color-1: #cor1;
    --card-color-2: #cor2;
}
```

---

### 4. Carrossel de Depoimentos
**Localização em HTML:** Linhas 306-351  
**Localização em CSS:** Linhas 711-879

**Características:**
- Rotação automática (8 segundos)
- Navegação manual com setas
- Dots indicadores
- Animação suave entre depoimentos

**Dados dos depoimentos:** Em `script.js` linhas 70-89

---

### 5. Formulário de Contato
**Localização em HTML:** Linhas 420-447  
**Localização em CSS:** Linhas 981-1008

**Características:**
- Validação HTML5 (required)
- Estilos personalizados para inputs
- Efeito focus com cor primária
- Responsivo

**Funcionalidade:** `script.js` linhas 143-159

---

## 🔧 JavaScript - Funcionalidades

### 1. Menu Mobile Toggle
```javascript
// Linhas 1-13
// Toggle: abre/fecha menu mobile
// Fecha ao clicar em um link
```

### 2. Navbar Scroll Effect
```javascript
// Linhas 15-22
// Adiciona classe 'scrolled' quando user faz scroll > 50px
// Ativa background branco com sombra
```

### 3. Carrossel de Depoimentos
```javascript
// Linhas 70-142
// Array com dados dos depoimentos
// Funções de navegação (prev/next)
// Auto-rotate a cada 8 segundos
// Sincroniza com dots indicadores
```

### 4. Formulário de Contato
```javascript
// Linhas 143-159
// Previne submit padrão
// Coleta dados do formulário
// Mostra mensagem de sucesso (alert)
// Limpa o formulário
// ⚠️ Nota: Não envia email (apenas console.log)
```

### 5. Scroll Suave e Animações
```javascript
// Linhas 161-198
// Scroll behavior smooth em âncoras
// IntersectionObserver para animações de entrada
// Anima elementos quando entram em view
```

---

## 📱 Responsividade

### Breakpoints Utilizados

| Breakpoint | Largura | Dispositivo |
|-----------|---------|------------|
| Mobile | < 640px | Celular pequeno |
| Tablet | 640px - 1023px | Tablet |
| Desktop | ≥ 1024px | Desktop |
| Xl | ≥ 1200px | Desktop grande |

### Mudanças por Breakpoint

**Mobile (< 768px):**
- Menu desktop escondido
- Hero 1 coluna (sem imagem)
- Services 1 coluna
- Títulos menores
- Paddings reduzidos

**Tablet (768px - 1023px):**
- Menu desktop aparece
- Services 2 colunas
- About 1 coluna (imagem acima)

**Desktop (≥ 1024px):**
- Hero 2 colunas com imagem
- Services 3 colunas
- About 2 colunas lado a lado
- Layouts expandidos

---

## 📝 Como Fazer Alterações Comuns

### 1. 🎨 Mudar a Cor Primária da Marca

**Passo 1:** Abra `styles.css`

**Passo 2:** Procure por `#14b8a6` (Ctrl+F / Cmd+F)

**Passo 3:** Substitua todas as ocorrências pela nova cor

**Exemplo - Trocar para Azul:**
```css
/* Antes */
.highlight { color: #14b8a6; }

/* Depois */
.highlight { color: #3b82f6; }
```

**Cores relacionadas a atualizar:**
- `#14b8a6` → Nova cor principal
- `#0d9488` → Versão mais escura (use ~30% mais escura)
- `#f0fdfa` → Versão muito clara (use ~95% mais clara)

---

### 2. 📸 Trocar a Imagem do Hero

**Em `index.html` linha 148:**
```html
<!-- Antes -->
<img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=faces" alt="Dr.">

<!-- Depois -->
<img src="NOVA_URL_IMAGEM" alt="Dr.">
```

---

### 3. ✏️ Editar Textos Principais

**Navbar/Logo:** Linhas 18-23
```html
<p class="logo-name">Dra. Marina</p>
<p class="logo-specialty">Oliveira</p>
```

**Hero Title:** Linhas 78-82
```html
<h1 class="hero-title">
    Dra. Marina
    <span class="highlight">Oliveira</span>
</h1>
```

**Badges:** Linha 77
```html
<span class="hero-badge">Psicóloga Clínica — CRP 06/123456</span>
```

---

### 4. 🏥 Adicionar/Remover Serviços

**Locais a editar:**
1. **HTML (index.html):** Duplicar um `.service-card` e editar
2. **CSS (styles.css):** Criar nova classe `.service-card-7` com gradiente

**Exemplo:**
```html
<div class="service-card service-card-7">
    <div class="service-icon">
        <!-- SVG do ícone -->
    </div>
    <h3>Novo Serviço</h3>
    <p>Descrição do serviço...</p>
</div>
```

```css
.service-card-7 {
    --card-color-1: #novo-cor1;
    --card-color-2: #nova-cor2;
}
```

---

### 5. 💬 Adicionar Depoimentos

**Em `script.js` linhas 70-89, adicione ao array:**
```javascript
{
    name: "Novo Cliente",
    role: "Tipo de atendimento",
    content: "Texto do depoimento aqui...",
    image: "https://images.unsplash.com/photo-xxxx?w=100&h=100&fit=crop&crop=faces"
}
```

O carrossel atualizará automaticamente.

---

### 6. 📞 Alterar Informações de Contato

**Em `index.html` linhas 359-407:**

```html
<!-- Endereço - Linha 361 -->
<p>Av. Paulista, 1234 - Sala 567<br>Bela Vista, São Paulo - SP</p>

<!-- Telefone - Linha 371 -->
<p>(11) 99999-9999</p>

<!-- Email - Linha 381 -->
<p>contato@dramarina.com.br</p>

<!-- Horário - Linha 391 -->
<p>Segunda a Sexta: 8h às 20h<br>Sábado: 8h às 14h</p>
```

---

### 7. 🔗 Alterar Links de Redes Sociais

**Em `index.html` linhas 412-424:**
```html
<a href="https://instagram.com/seu-perfil" class="social-icon" title="Instagram">
    <!-- SVG -->
</a>
```

---

### 8. 🎬 Aumentar/Diminuir Velocidade do Carrossel

**Em `script.js` linha 142:**
```javascript
// Antes - 8 segundos
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 8000);

// Depois - 5 segundos (5000 ms)
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 5000);
```

---

### 9. 🔤 Alterar Fonte

**Em `styles.css` linha 21:**
```css
/* Antes */
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Depois - Exemplo com Google Fonts */
body {
    font-family: 'Poppins', sans-serif;
}
```

**Importante:** Se usar Google Fonts, adicione no `<head>` do HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
```

---

### 10. 🔲 Arredondar Mais/Menos os Elementos

**Procure por `border-radius` em `styles.css`:**

```css
/* Aumentar arredondamento */
.btn { border-radius: 9999px; }        /* Muito arredondado */
.service-card { border-radius: 2rem; } /* Bastante arredondado */
.logo-circle { border-radius: 0.75rem; } /* Pouco arredondado */
```

**Última atualização:** 10 de dezembro de 2025  
**Versão:** 1.0
