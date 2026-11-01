import './styles.css';
import { registerSW } from 'virtual:pwa-register';
import { GAMES, iconSvg, linkTo } from './games.ts';

const RAINBOW = ['#FF5252', '#FFAB40', '#FFEB3B', '#69F0AE', '#40C4FF', '#E040FB'];

/** Texto com cada letra de uma cor. */
function rainbow(text: string): string {
  let k = 0;
  return [...text].map((c) => (c === ' ' ? ' ' : `<span style="color:${RAINBOW[k++ % RAINBOW.length]}">${c}</span>`)).join('');
}

/** Bloqueia zoom, menu de toque longo, seleção e rolagem do Safari. */
function blockBrowserGestures(): void {
  const prevent = (e: Event) => e.preventDefault();
  for (const type of ['gesturestart', 'gesturechange', 'gestureend', 'dblclick', 'contextmenu', 'selectstart']) {
    document.addEventListener(type, prevent, { passive: false });
  }
  document.addEventListener('touchmove', prevent, { passive: false });
  document.addEventListener('touchstart', () => {}, { passive: true });
}

blockBrowserGestures();

document.getElementById('app')!.innerHTML = `
  <h1 class="title">${rainbow('Jogos do Gustavo')}</h1>
  <nav class="games">
    ${GAMES.map(
      (g) => `
      <a class="game" href="${linkTo(g)}" aria-label="${g.name}">
        <span class="icon">${iconSvg(g)}</span>
        <span class="name">${g.name}</span>
      </a>`,
    ).join('')}
  </nav>
  <p class="tip">Para instalar no iPad: abra no Safari, toque em <b>Compartilhar</b> e em <b>Adicionar à Tela de Início</b>.</p>`;

// Esta página funciona sem internet.
if ('serviceWorker' in navigator) {
  registerSW({ immediate: true });
  void navigator.storage?.persist?.().catch(() => false);
  // Guarda também cada jogo (o "modo offline" de cada um), para todos
  // funcionarem sem internet depois de abrir esta página uma vez.
  window.addEventListener('load', () => {
    setTimeout(() => {
      for (const g of GAMES) {
        navigator.serviceWorker.register(`${g.path}sw.js`, { scope: g.path }).catch(() => {});
      }
    }, 1500);
  });
}
