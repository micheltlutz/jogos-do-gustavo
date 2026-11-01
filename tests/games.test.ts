import { describe, expect, it } from 'vitest';
import { GAMES, iconSvg, linkTo } from '../src/games.ts';

describe('jogos', () => {
  it('são os 4 jogos, cada um no seu caminho', () => {
    expect(GAMES.map((g) => g.key)).toEqual(['garagem', 'colorir', 'garrafinhas', 'letrinhas']);
    for (const g of GAMES) {
      expect(g.path).toMatch(/^\/[a-z]+-do-gustavo\/$/);
      expect(linkTo(g)).toBe(`${g.path}#jogos`);
    }
  });

  it('ícones embutidos com ids que não se misturam', () => {
    const all = GAMES.map(iconSvg).join('');
    const ids = [...all.matchAll(/id="([^"]+)"/g)].map((m) => m[1]);
    expect(new Set(ids).size).toBe(ids.length);
    for (const m of all.matchAll(/url\(#([^)]+)\)/g)) expect(ids).toContain(m[1]);
    for (const g of GAMES) expect(iconSvg(g)).toContain('viewBox="0 0 512 512"');
  });
});
