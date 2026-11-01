// Os jogos do Gustavo (todos publicados em micheltlutz.github.io).

import colorir from './icons/colorir.svg?raw';
import garagem from './icons/garagem.svg?raw';
import garrafinhas from './icons/garrafinhas.svg?raw';
import letrinhas from './icons/letrinhas.svg?raw';

export interface Game {
  readonly key: string;
  readonly name: string;
  /** Caminho do jogo no site (com a barra no fim). */
  readonly path: string;
  readonly icon: string;
}

export const GAMES: readonly Game[] = [
  { key: 'garagem', name: 'Garagem', path: '/garagem-do-gustavo/', icon: garagem },
  { key: 'colorir', name: 'Colorir', path: '/colorir-do-gustavo/', icon: colorir },
  { key: 'garrafinhas', name: 'Garrafinhas', path: '/garrafinhas-do-gustavo/', icon: garrafinhas },
  { key: 'letrinhas', name: 'Letrinhas', path: '/letrinhas-do-gustavo/', icon: letrinhas },
];

/**
 * Link para abrir o jogo. O "#jogos" avisa o jogo que ele veio daqui,
 * para mostrar o botão de voltar para esta página.
 */
export function linkTo(game: Game): string {
  return `${game.path}#jogos`;
}

/** Ícone embutido, com ids únicos (vários ícones na mesma página). */
export function iconSvg(game: Game): string {
  return game.icon
    .replaceAll('id="', `id="${game.key}-`)
    .replaceAll('url(#', `url(#${game.key}-`)
    .replace('<svg ', '<svg aria-hidden="true" ');
}
