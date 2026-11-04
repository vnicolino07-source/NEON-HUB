/*
  CONTEÚDOS DO HUB NEON
  ---------------------------------------------
  Para adicionar um conteúdo novo, copie um bloco { ... } e cole NO TOPO da lista.
  O mais novo sempre fica primeiro. Veja COMO_ADICIONAR.md.

  Campos principais:
    id, titulo, tipo, data ("AAAA-MM-DD"), resumo, descricao
    autor, licenca, repo   → opcionais (para skills de terceiros: manter o crédito)
    arquivo                → .zip dentro de arquivos/ (opcional)
    video                  → link do reel (opcional)
    aviso                  → frase de destaque no topo (opcional)
    blocos                 → seções da página (opcional). Sem blocos, usa o passo a passo padrão de skill .zip.
      { h: "Título", p: "texto" }
      { h: "Título", chips: ["/ig-reel", ...] }
      { h: "Título", tabela: [["item", "detalhe"], ...] }
      { h: "Título", passos: [{ t: "título", p: "texto", label: "Cole no ...", codigo: "comando", nota: "texto" }] }
    exemplo                → frase para mandar ao Claude depois de instalar (opcional)
*/
window.NEON_EDIT_URL = "https://neon-edit.netlify.app/";

window.CONTEUDOS = [
  {
    id: "instagram-agent",
    titulo: "Instagram Agent",
    tipo: "Skill",
    data: "2026-11-04",
    resumo: "13 skills que escrevem Reels, legendas, carrosséis e comentários para o seu Instagram, dentro do Claude.",
    descricao: "Pacote gratuito de 13 skills para o Claude planejar, escrever e revisar o conteúdo do seu Instagram. Não pede cadastro, chave de API nem acesso à sua conta.",
    autor: "Jake Schincariol",
    licenca: "MIT",
    repo: "https://github.com/Jakeschincariol/instagram-agent-skill",
    arquivo: "",
    video: "",
    aviso: "O pacote é atualizado com frequência. Se o número de skills no GitHub estiver diferente do daqui, vale o que está no GitHub.",
    blocos: [
      { h: "O que é",
        p: "Cada skill cuida de uma tarefa: roteiro de Reel, legenda, carrossel, story, bio, planejamento, respostas a comentários e DMs, auditoria do perfil e mais. Uma delas analisa o que está funcionando no seu nicho antes de escrever. Todas entregam o texto pronto para copiar." },
      { h: "As 13 skills",
        chips: ["/ig-reel","/ig-viral","/ig-caption","/ig-carousel","/ig-story","/ig-profile","/ig-plan","/ig-human","/ig-comment","/ig-reply","/ig-dm","/ig-repurpose","/ig-audit"] },
      { h: "O que ele não faz",
        p: "Ele não publica nada. As skills escrevem e você copia e posta. Nada é ligado na sua conta do Instagram." },
      { h: "O que você precisa",
        tabela: [
          ["Claude", "Claude Code, onde o pacote instala completo. No app e no claude.ai dá para usar de outro jeito (veja no fim)."],
          ["Python 3", "Opcional. Só para as 5 ferramentas de pontuação. Sem ele, as skills continuam escrevendo."],
          ["Conta", "Só a do Claude."],
          ["Chave de API", "Nenhuma."],
          ["Instagram conectado", "Não precisa."]
        ] },
      { h: "Instalação: escolha um jeito",
        passos: [
          { t: "O mais fácil: deixe o Claude instalar",
            p: "Abra o Claude Code em qualquer pasta e mande esta mensagem:",
            label: "Mande no Claude Code",
            codigo: "https://github.com/Jakeschincariol/instagram-agent-skill\n\nInstala essa skill e depois confirma que o /ig-reel funciona." },
          { t: "Pelo plugin (são dois comandos)",
            p: "No Claude Code, rode os dois, um depois do outro:",
            label: "Cole no Claude Code",
            codigo: "/plugin marketplace add Jakeschincariol/instagram-agent-skill\n/plugin install instagram-agent",
            nota: "O primeiro só registra o repositório. Quem instala é o segundo. Se aparecer aviso de nome repetido, use: /plugin install instagram-agent@instagram-agent-skill" },
          { t: "Manual no macOS ou Linux",
            label: "Cole no terminal",
            codigo: "git clone https://github.com/Jakeschincariol/instagram-agent-skill.git\nmkdir -p ~/.claude/skills\ncp -r instagram-agent-skill/skills/ig-* ~/.claude/skills/" },
          { t: "Manual no Windows (PowerShell)",
            label: "Cole no PowerShell",
            codigo: "git clone https://github.com/Jakeschincariol/instagram-agent-skill.git\nNew-Item -ItemType Directory -Force \"$HOME\\.claude\\skills\"\nCopy-Item -Recurse \"instagram-agent-skill\\skills\\ig-*\" \"$HOME\\.claude\\skills\\\"",
            nota: "As pastas ig-reel, ig-caption e as outras precisam ficar soltas dentro de skills. O caminho certo é ~/.claude/skills/ig-reel/SKILL.md. Se ficar uma pasta a mais no meio, o Claude não encontra." }
        ] },
      { h: "Depois de instalar: configure a sua voz",
        passos: [
          { t: "Crie o arquivo voice.md",
            p: "Todas as skills leem esse arquivo para escrever do seu jeito. Sem ele, o texto sai genérico.",
            label: "macOS ou Linux",
            codigo: "mkdir -p ~/.claude/instagram\ncp instagram-agent-skill/templates/voice.md ~/.claude/instagram/voice.md" },
          { t: "No Windows",
            label: "Cole no PowerShell",
            codigo: "New-Item -ItemType Directory -Force \"$HOME\\.claude\\instagram\"\nCopy-Item \"instagram-agent-skill\\templates\\voice.md\" \"$HOME\\.claude\\instagram\\voice.md\"" },
          { t: "Preencha com a sua voz",
            p: "Sem paciência para preencher? Mande três legendas suas para o Claude e peça: \"escreve o meu voice.md a partir dessas\"." }
        ] },
      { h: "Sem Claude Code",
        p: "No app ou no claude.ai, você pode colar o conteúdo de um SKILL.md do repositório numa conversa para usar aquela skill. Nesse jeito, as ferramentas de pontuação não funcionam." }
    ],
    exemplo: "Usa o /ig-reel e escreve um roteiro de Reel sobre [o seu tema]."
  }
];
