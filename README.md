# Jogos do Gustavo

Página com todos os jogos do Gustavo num lugar só, **sem propagandas, sem compras e sem coleta de dados**.

**Abrir:** https://micheltlutz.github.io/jogos-do-gustavo/

| Jogo | Endereço |
| --- | --- |
| Garagem do Gustavo | https://micheltlutz.github.io/garagem-do-gustavo/ |
| Colorir do Gustavo | https://micheltlutz.github.io/colorir-do-gustavo/ |
| Garrafinhas do Gustavo | https://micheltlutz.github.io/garrafinhas-do-gustavo/ |
| Letrinhas do Gustavo | https://micheltlutz.github.io/letrinhas-do-gustavo/ |
| Patinhas do Gustavo | https://micheltlutz.github.io/patinhas-do-gustavo/ |
| Estilingue do Gustavo | https://micheltlutz.github.io/estilingue-do-gustavo/ |
| A Lenda do Alfabeto | https://micheltlutz.github.io/lenda-do-alfabeto/ |

## Instalar no iPad (um ícone só para todos os jogos)

1. Abra o link acima no **Safari**.
2. Toque em **Compartilhar** → **Adicionar à Tela de Início**.
3. Abra pelo ícone **uma vez com internet** e espere alguns segundos: a página guarda todos os jogos para funcionarem offline.

Como funciona:
- Instalado, os jogos abrem **dentro do mesmo app**, sem a barra do Safari.
- Cada jogo aberto por aqui ganha um botão **←** na tela inicial dele, para voltar para esta página.
- O progresso dos jogos fica salvo dentro deste app. Se algum jogo também estiver instalado sozinho (com ícone próprio), o progresso de lá é separado (é assim que o iPad guarda os dados de cada app da Tela de Início).

## Desenvolvimento

Requer Node 24 ou mais novo.

```sh
npm install
npm run dev -- --host   # abre na rede local
npm test
npm run build           # versão final em dist/
npm run icons           # gera os ícones PNG a partir de public/icon.svg
```

- `src/games.ts`: a lista de jogos (nome, endereço e ícone).
- `src/icons/`: os ícones dos jogos (cópias do `public/icon.svg` de cada um).
- `public/icon.svg`: o ícone desta página (os quatro primeiros jogos num quadrado 2 x 2).

Cada push na branch `main` roda os testes e publica no GitHub Pages.
