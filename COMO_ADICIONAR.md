# Hub NEON: como adicionar um conteúdo novo

Instruções para o Claude (ou para você) em qualquer conversa nova.

1. Coloque o arquivo da skill (.zip) na pasta `arquivos/`. Nome só com letras minúsculas, números e hífen. Ex.: `arquivos/instagram-agent.zip`.
2. Abra `conteudos.js` e cole um bloco novo NO TOPO da lista `window.CONTEUDOS` (o mais novo fica primeiro):

```js
{
  id: "nome-da-skill",            // vira o link: https://SEU-SITE/#nome-da-skill
  titulo: "Nome da Skill",
  tipo: "Skill",
  data: "AAAA-MM-DD",
  resumo: "Uma frase para a lista.",
  descricao: "Uma a três frases explicando o que ela faz (tirado do roteiro do vídeo).",
  arquivo: "arquivos/nome-da-skill.zip",
  video: "",                       // link do reel, opcional
  passos: null,                    // null = passo a passo padrão de instalar skill no Claude
  exemplo: "Frase para mandar ao Claude depois de instalar."
},
```

3. Salve no GitHub (commit). O Netlify/Vercel publica sozinho em cerca de 1 minuto.
4. Use no ManyChat o link `https://SEU-SITE/#nome-da-skill`.

Página mais completa (como a do Instagram Agent): em vez de `passos`, use `blocos` com seções de texto (`p`), etiquetas (`chips`), tabela de requisitos (`tabela`) e passos com comandos copiáveis (`passos` com `codigo`). O modelo está no próprio `conteudos.js`.
Skill de terceiros hospedada no GitHub: preencha `repo`, `autor` e `licenca`; o botão vira "VER NO GITHUB" e o crédito aparece na página.

Regras:
- Não inventar o que a skill faz: a descrição vem do roteiro ou do próprio SKILL.md.
- Só publicar skills do titular ou com licença que permita redistribuir (manter o crédito quando a licença pedir).
- O link do NEON EDIT fica em `window.NEON_EDIT_URL`, no topo de `conteudos.js`.
