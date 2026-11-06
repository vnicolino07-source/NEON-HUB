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
    id: "carrossel-neon",
    titulo: "Carrossel NEON",
    tipo: "Skill",
    data: "2026-11-06",
    resumo: "Uma skill para o Claude criar carrosséis prontos para o Instagram, com gancho, conteúdo, chamada para ação e o design dos slides.",
    descricao: "Você passa 3 informações e o Claude entrega o carrossel pronto em imagens (1080×1350), para revisar e postar. Dá para partir de um carrossel que funcionou em outro perfil ou de um Reel seu que teve muitas visualizações.",
    autor: "NEON",
    arquivo: "arquivos/carrossel-neon.zip",
    video: "",
    aviso: "",
    blocos: [
      { h: "Como ficam os slides", imagens: ["img/carrossel/exemplo-1.jpg", "img/carrossel/exemplo-2.jpg", "img/carrossel/exemplo-4.jpg"] },
      { h: "As 3 informações que você passa",
        tabela: [
          ["1. O problema do público", "A dor ou a dúvida principal de quem te segue."],
          ["2. O contexto", "Sobre o que é o carrossel e o que a pessoa deve fazer no fim (comentar, seguir, mandar mensagem)."],
          ["3. Uma referência", "Um carrossel que funcionou em outro perfil, ou o roteiro ou a legenda de um Reel seu que viralizou."]
        ] },
      { h: "O que a skill faz",
        p: "Escreve o gancho da capa, divide o conteúdo em slides com uma ideia cada, destaca as palavras importantes, fecha com a chamada para ação e gera as imagens com as cores da sua marca. Também escreve a legenda do post. Se você pedir o mês inteiro, ela monta primeiro a lista de ideias e depois gera em lotes." },
      { h: "Instalar no Claude (site ou app)",
        passos: [
          { t: "Baixe o arquivo", p: "Toque em BAIXAR SKILL, no topo da página. Não precisa descompactar o .zip." },
          { t: "Ative a criação de arquivos", p: "No Claude, abra Settings › Capabilities e ative Code execution and file creation." },
          { t: "Envie a skill", p: "Vá em Customize › Skills, toque no +, depois em Create skill e em Upload a skill. Escolha o carrossel-neon.zip." },
          { t: "Use numa conversa nova", p: "Deixe a skill ligada e abra uma conversa nova. Mande o pedido do próximo bloco." }
        ] },
      { h: "Instalar no Claude Code",
        passos: [
          { t: "Deixe o Claude instalar",
            p: "Baixe o .zip, abra o Claude Code e mande (troque pelo caminho do arquivo no seu computador):",
            label: "Mande no Claude Code",
            codigo: "Instala esta skill para mim: [caminho do arquivo]/carrossel-neon.zip\nDescompacta em ~/.claude/skills/carrossel-neon e confere se o SKILL.md ficou em ~/.claude/skills/carrossel-neon/SKILL.md",
            nota: "No Windows, a pasta certa é C:\\Users\\SEU-USUARIO\\.claude\\skills\\carrossel-neon. Depois feche e abra o Claude Code." }
        ] },
      { h: "Peça o seu carrossel",
        passos: [
          { t: "A partir de uma referência",
            label: "Mande no Claude",
            codigo: "Cria um carrossel para o meu Instagram.\nProblema do meu público: [a dor principal]\nContexto: [o tema e o que a pessoa deve fazer no fim]\nReferência que funcionou: [cole o texto do carrossel ou mande os prints]" },
          { t: "A partir de um Reel seu que viralizou",
            label: "Mande no Claude",
            codigo: "Transforma este Reel em carrossel. O roteiro do vídeo é:\n[cole o roteiro ou a legenda]\nProblema do meu público: [a dor principal]\nNo fim, a pessoa tem que comentar [PALAVRA].",
            nota: "No Claude Code você também pode mandar o arquivo do vídeo. Se o seu computador tiver as ferramentas de transcrição, ele tira o roteiro sozinho. Se não tiver, ele te pede o roteiro." },
          { t: "O mês inteiro",
            label: "Mande no Claude",
            codigo: "Monta o calendário de carrosséis do mês: 20 ideias sobre [o seu tema], misturando os formatos. Me mostra a lista antes de gerar." }
        ] },
      { h: "Dicas",
        tabela: [
          ["Use referências como inspiração", "A skill aproveita a estrutura da referência e escreve um texto novo. Não poste o texto de outro perfil."],
          ["Revise antes de postar", "Confira os dados e o tom. Peça ajustes como \"deixa o gancho mais curto\" ou \"troca a cor do destaque\"."],
          ["Sua marca fica salva", "No Claude Code, ela guarda as cores e o @ num arquivo marca.json e reaproveita nos próximos."]
        ] }
    ],
    oferta: {
      tag: "Edição de vídeos com IA",
      titulo: "Já tem o carrossel.",
      destaque: "Quer que o Claude edite os seus Reels também?",
      texto: "Com o NEON EDIT, você grava, pede a edição com as suas palavras e o Claude faz os cortes, as legendas e as animações no seu estilo.",
      botao: "CONHECER O NEON EDIT"
    }
  },
  {
    id: "virality-predictor",
    titulo: "Virality Predictor",
    tipo: "Skill",
    data: "2026-11-06",
    resumo: "Dê uma nota para o potencial de viralização do seu vídeo e veja onde as pessoas perdem o interesse, antes de postar.",
    descricao: "O Virality Predictor é uma ferramenta da Higgsfield que analisa um vídeo pronto e estima como o público deve reagir: a força do gancho, a atenção e a retenção ao longo do vídeo. Ele vem dentro das skills oficiais da Higgsfield para o Claude Code, então você pede a análise numa conversa e recebe as notas e um relatório completo.",
    autor: "Higgsfield AI",
    licenca: "MIT (as skills)",
    repo: "https://github.com/higgsfield-ai/skills",
    arquivo: "",
    video: "",
    aviso: "É uma estimativa, não uma garantia de viralizar. Use para comparar versões do mesmo vídeo e achar os pontos fracos antes de postar.",
    blocos: [
      { h: "O que você recebe",
        tabela: [
          ["Nota geral", "Uma pontuação do potencial do vídeo para prender a atenção."],
          ["Gancho", "Se os primeiros segundos seguram a pessoa ou fazem ela passar."],
          ["Retenção", "Em que momentos a atenção sobe e onde ela cai, segundo a segundo."],
          ["Relatório", "Um link para abrir o relatório completo, com o gráfico e o mapa de atenção."]
        ] },
      { h: "O que você precisa",
        tabela: [
          ["Claude Code", "É onde as skills da Higgsfield rodam. No chat do claude.ai elas não funcionam."],
          ["Node.js", "Para instalar as skills. Baixe a versão LTS em nodejs.org."],
          ["Conta na Higgsfield", "Crie a sua em higgsfield.ai. As análises usam a sua conta e podem consumir créditos. Confira o saldo antes."],
          ["O vídeo pronto", "Um arquivo .mp4 no seu computador."]
        ] },
      { h: "Instalação: escolha um jeito",
        passos: [
          { t: "O mais fácil: deixe o Claude instalar",
            p: "Abra o Claude Code em qualquer pasta e mande:",
            label: "Mande no Claude Code",
            codigo: "https://github.com/higgsfield-ai/skills\n\nInstala as skills da Higgsfield com: npx skills add higgsfield-ai/skills\nDepois instala a Higgsfield CLI e me ajuda a fazer o login.",
            nota: "Ele instala tudo e abre o login da Higgsfield no navegador para você entrar na sua conta." },
          { t: "Pelo terminal",
            label: "Cole no terminal",
            codigo: "npx skills add higgsfield-ai/skills",
            nota: "Isso instala as 8 skills da Higgsfield. O Virality Predictor fica dentro da skill higgsfield-generate." },
          { t: "Pelo plugin do Claude Code",
            p: "Dentro do Claude Code, rode os dois comandos, um de cada vez:",
            label: "Cole no Claude Code",
            codigo: "/plugin marketplace add higgsfield-ai/skills\n/plugin install higgsfield@higgsfield" },
          { t: "Instale a Higgsfield CLI e entre na sua conta",
            p: "Se você usou o jeito do Claude, ele já faz isso. Se não, rode no terminal:",
            label: "macOS ou Linux",
            codigo: "curl -fsSL https://raw.githubusercontent.com/higgsfield-ai/cli/main/install.sh | sh\nhiggsfield auth login" },
          { t: "No Windows",
            label: "Cole no PowerShell",
            codigo: "npm install -g @higgsfield/cli\nhiggsfield auth login",
            nota: "O login abre no navegador. Entre com a sua conta da Higgsfield e volte para o terminal." }
        ] },
      { h: "Como analisar o seu vídeo",
        passos: [
          { t: "Abra o Claude Code na pasta do vídeo",
            p: "Coloque o .mp4 numa pasta e abra o Claude Code dentro dela." },
          { t: "Peça a análise",
            p: "Troque o nome do arquivo pelo seu:",
            label: "Mande no Claude Code",
            codigo: "Analisa este vídeo com o Virality Predictor da Higgsfield: [meu-video.mp4].\nMe mostra a nota geral, a força do gancho e em que segundos as pessoas devem perder o interesse.\nDepois me diz o que mudar no corte, no ritmo e na legenda." },
          { t: "Abra o relatório completo",
            p: "O Claude te devolve as notas e um link para o relatório, com o gráfico de retenção. Ajuste o vídeo, analise de novo e compare as notas." },
          { t: "Quer rodar direto, sem o Claude?",
            p: "Com a CLI instalada, na pasta do vídeo:",
            label: "Cole no terminal",
            codigo: "higgsfield generate create brain_activity --video ./meu-video.mp4 --wait" }
        ] },
      { h: "Sem Claude Code",
        p: "Você também pode usar o Virality Predictor direto no site da Higgsfield, enviando o vídeo pelo navegador." },
      { h: "Deu erro?",
        tabela: [
          ["\"Not authenticated\" ou \"Session expired\"", "Rode de novo: higgsfield auth login"],
          ["\"Missing required params: medias\"", "Faltou o vídeo. Mande exatamente um arquivo, com --video seguido do nome."],
          ["\"higgsfield: command not found\"", "A CLI não foi instalada. Rode o comando de instalação do seu sistema e abra o terminal de novo."],
          ["Sem créditos", "Confira o saldo com: higgsfield account"]
        ] }
    ],
    oferta: {
      tag: "Edição de vídeos com IA",
      titulo: "Descobriu onde o vídeo perde as pessoas?",
      destaque: "Deixe o Claude reeditar no seu estilo.",
      texto: "Com o NEON EDIT, você pede ajustes de corte, ritmo, legenda e animação com as suas palavras e recebe uma nova prévia antes do vídeo final.",
      botao: "CONHECER O NEON EDIT"
    }
  },
  {
    id: "8-elementos",
    titulo: "Os 8 elementos de um vídeo que prende",
    tipo: "Guia",
    data: "2026-11-06",
    resumo: "A estrutura de roteiro que mantém a pessoa assistindo do começo ao fim, com um modelo pronto para usar no Claude.",
    descricao: "Se as pessoas saem do seu vídeo nos primeiros segundos, talvez o problema não seja o assunto, e sim a ordem em que você conta. Estes são os 8 elementos que eu uso para segurar a atenção, inclusive no vídeo que te trouxe até aqui.",
    semArquivo: true,
    blocos: [
      { h: "Os 8 elementos, na ordem",
        passos: [
          { t: "Gancho", p: "A primeira frase. Ela tem que fazer a pessoa parar de rolar o feed. Uma pergunta que ela mesma já se fez funciona muito bem.", nota: "No vídeo: \"Você já percebeu que alguns vídeos prendem sua atenção até o último segundo, e outros você pula em menos de três?\"" },
          { t: "Introdução", p: "Diga o que a pessoa ganha se ficar até o fim. Uma promessa clara e específica." , nota: "No vídeo: a promessa de mostrar os 8 elementos." },
          { t: "Desenvolvimento", p: "Comece a entregar logo. Quem promete e enrola perde a pessoa aqui." },
          { t: "Primeiro loop aberto", p: "Deixe uma curiosidade sem resposta, para ser resolvida mais para frente. É ela que faz a pessoa continuar." },
          { t: "Segundo desenvolvimento", p: "Aprofunde. Traga mais informação ou um exemplo, sempre com algo novo a cada poucos segundos." },
          { t: "Segundo loop aberto", p: "Antes que o interesse caia, abra outra curiosidade.", nota: "No vídeo: \"tem um detalhe nessa estrutura que pode mudar completamente a retenção dos seus vídeos\"." },
          { t: "Desenvolvimento final", p: "Feche as curiosidades que você abriu e entregue a resposta prometida, ligando tudo." },
          { t: "Chamada para ação", p: "Diga exatamente o que a pessoa deve fazer agora: comentar uma palavra, seguir o perfil ou receber um material." }
        ] },
      { h: "O detalhe que muda tudo",
        p: "Um gancho forte segura só os primeiros segundos. O que mantém a pessoa até o fim é ela ganhar um motivo novo para continuar em cada parte do vídeo. Por isso a estrutura abre curiosidade duas vezes, e não só no começo." },
      { h: "Use agora com o Claude",
        passos: [
          { t: "Peça o seu roteiro nessa estrutura",
            p: "Funciona em qualquer conversa com o Claude. Troque o que está entre colchetes:",
            label: "Mande no Claude",
            codigo: "Escreve um roteiro de Reel de até 60 segundos sobre [o seu tema], seguindo estes 8 elementos na ordem: gancho, introdução, desenvolvimento, primeiro loop aberto, segundo desenvolvimento, segundo loop aberto, desenvolvimento final e chamada para ação.\nMarca cada parte e termina com: \"comenta [PALAVRA] que eu te mando [o material]\".",
            nota: "Peça também 3 opções de gancho e escolha a que você pararia para assistir." }
        ] }
    ],
    oferta: {
      tag: "Vídeos animados com IA",
      titulo: "Quer criar vídeos animados",
      destaque: "como esse, com o Claude?",
      texto: "O vídeo que te trouxe até aqui foi editado com o NEON EDIT, seguindo essa mesma estrutura: cortes, legendas e animações feitos pelo Claude. Você grava e ele edita no seu estilo.",
      botao: "QUERO O NEON EDIT"
    }
  },
  {
    id: "claude-md",
    titulo: "CLAUDE.md: as 4 regras",
    tipo: "Arquivo",
    data: "2026-11-05",
    resumo: "Um arquivo de texto que faz o Claude Code parar de complicar, chutar, mexer no que você não pediu e dizer que terminou sem conferir.",
    descricao: "O CLAUDE.md é um arquivo de texto que fica na pasta do seu projeto. O Claude Code lê esse arquivo toda vez que começa a trabalhar ali. Este traz 4 regras baseadas nas observações do Andrej Karpathy sobre os erros que a IA comete quando programa. Não é programa: não tem nada para instalar nem para rodar.",
    autor: "forrestchang",
    licenca: "MIT",
    repo: "https://github.com/forrestchang/andrej-karpathy-skills",
    arquivo: "",
    video: "",
    aviso: "",
    blocos: [
      { h: "As 4 regras",
        tabela: [
          ["1. Pensa antes de fazer", "Não supõe nada. Se o pedido dá para entender de mais de um jeito, mostra as opções. Se não entendeu, para e pergunta."],
          ["2. Simples primeiro", "Faz o mínimo que resolve. Nada que você não pediu e nada \"para caso precise depois\"."],
          ["3. Mexe só no que foi pedido", "Não \"melhora\" o resto, não reformata e não apaga o que já estava lá. Cada mudança tem que vir do seu pedido."],
          ["4. Define o que é pronto e confere", "Antes de começar, transforma o pedido em algo que dá para testar. Só diz que terminou depois de conferir."]
        ] },
      { h: "O que você precisa",
        tabela: [
          ["Claude Code", "É onde o CLAUDE.md é lido sozinho: no terminal, no app de desktop (aba Code) e na extensão do VS Code."],
          ["Uma pasta de projeto", "Qualquer pasta onde você trabalha com o Claude Code."]
        ] },
      { h: "Instalação: escolha um jeito",
        passos: [
          { t: "O mais fácil: mande o link para o Claude Code",
            p: "Abra o Claude Code dentro da pasta do seu projeto e mande:",
            label: "Mande no Claude Code",
            codigo: "https://github.com/forrestchang/andrej-karpathy-skills\n\nBaixa o CLAUDE.md desse repositório e coloca na raiz deste projeto.\nSe já existir um CLAUDE.md aqui, não apaga nada: acrescenta o conteúdo no final do que já existe.",
            nota: "Ele baixa o arquivo e mostra onde colocou. A partir da próxima conversa nesse projeto, as regras já valem." },
          { t: "Como plugin, para todos os seus projetos",
            p: "Dentro do Claude Code, rode os dois comandos, um de cada vez:",
            label: "Cole no Claude Code",
            codigo: "/plugin marketplace add forrestchang/andrej-karpathy-skills\n/plugin install andrej-karpathy-skills@karpathy-skills",
            nota: "O primeiro só registra o repositório. Quem instala é o segundo." },
          { t: "Pelo terminal, num projeto que ainda não tem CLAUDE.md",
            p: "Na pasta do projeto:",
            label: "macOS ou Linux",
            codigo: "curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md" },
          { t: "Pelo terminal, num projeto que já tem CLAUDE.md",
            p: "Assim as regras entram no final, sem apagar as suas:",
            label: "macOS ou Linux",
            codigo: "echo \"\" >> CLAUDE.md\ncurl https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md" },
          { t: "Pelo terminal no Windows",
            p: "No PowerShell, use curl.exe (o curl sozinho é outro comando):",
            label: "Cole no PowerShell",
            codigo: "curl.exe -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md",
            nota: "Esse comando cria o arquivo do zero. Se o projeto já tem um CLAUDE.md, use o jeito do link no Claude Code para não apagar o seu." }
        ] },
      { h: "Quer que valha em todos os projetos, sem plugin?",
        p: "O Claude Code também lê um CLAUDE.md pessoal, que vale para tudo: ~/.claude/CLAUDE.md (no Windows, C:\\Users\\SEU-USUARIO\\.claude\\CLAUDE.md). Cole as regras no final desse arquivo. Se ele não existir, peça para o Claude Code: \"cria o meu CLAUDE.md pessoal com as regras deste link\"." },
      { h: "Como saber se funcionou",
        passos: [
          { t: "Confira onde está o arquivo", p: "Ele tem que estar na raiz do projeto: seu-projeto/CLAUDE.md, e não dentro de outra pasta." },
          { t: "Pergunte para o Claude", p: "Abra uma conversa nova nessa pasta e pergunte: \"quais regras do CLAUDE.md você está seguindo?\". Ele tem que citar as 4." },
          { t: "Repare no dia a dia", p: "Ele passa a perguntar antes quando o pedido é ambíguo, e as mudanças ficam menores. Para coisas simples, é só dizer \"pode seguir, é simples\"." }
        ] },
      { h: "Deu erro?",
        tabela: [
          ["Não segue as regras", "Confira se o arquivo está na raiz da pasta que o Claude Code abriu e abra uma conversa nova. A que já estava aberta não relê o arquivo."],
          ["Apagou o meu CLAUDE.md antigo", "Isso acontece com o curl -o num projeto que já tinha o arquivo. Desfaça pelo Git ou peça para o Claude recuperar, e use o jeito que acrescenta no final."],
          ["/plugin não existe", "Atualize o Claude Code ou use o jeito do link."],
          ["Estou no claude.ai (chat)", "O CLAUDE.md é do Claude Code. No chat, dá para colar as regras nas instruções de um Projeto, mas não funciona igual."]
        ] }
    ],
    exemplo: "Quais regras do CLAUDE.md você está seguindo?"
  },
  {
    id: "hypit",
    titulo: "Hypit",
    tipo: "Skill",
    data: "2026-11-05",
    resumo: "Recrie o formato de um vídeo viral com o Claude Code e gere várias versões dele para o seu produto.",
    descricao: "Programa gratuito e de código aberto que ensina o Claude Code a fazer vídeo. Você manda um vídeo de referência e ele recria o formato cena por cena, com pessoa falando, legendas, animações e som. Depois você troca o produto, o rosto, a voz ou a língua e gera várias versões do mesmo formato.",
    autor: "Hypit.AI",
    licenca: "Apache 2.0 com condições",
    repo: "https://github.com/hypit-ai/hypit",
    arquivo: "",
    video: "",
    aviso: "O programa é de graça, mas gerar imagem, vídeo e voz com IA é cobrado pelo serviço que você escolher. O próprio Hypit mostra o orçamento antes de gastar.",
    blocos: [
      { h: "O que ele faz",
        p: "O Claude assiste ao vídeo de referência, explica por que ele prende (o gancho, onde entra cada legenda, o que cada cena faz) e recria o vídeo inteiro no mesmo formato. Também dá para começar sem referência, só descrevendo o vídeo que você quer." },
      { h: "Quanto custa",
        tabela: [
          ["O Hypit", "Grátis. Sem mensalidade, sem marca d'água e sem taxa por vídeo."],
          ["Gerar com IA", "Imagens, cenas, voz e transcrição são cobradas pelo serviço que você ligar: o HypiHub (dos criadores do Hypit) ou a chave de API de outro serviço."],
          ["Exemplo real", "Nos exemplos do repositório, cada vídeo pronto custou entre US$ 1,07 e US$ 1,15."],
          ["Versões", "Trocar só legenda, texto ou animação reaproveita o que já foi gerado e sai bem mais barato. Um vídeo só de legenda e animação não gasta nada com IA."]
        ] },
      { h: "O que você precisa",
        tabela: [
          ["Claude Code", "Obrigatório. No chat do claude.ai ele não funciona, porque precisa rodar programas no seu computador."],
          ["Node.js 22.15 ou mais novo", "Baixe a versão LTS em nodejs.org. Para conferir, rode node -v no terminal."],
          ["Serviço de IA", "Só na hora de gerar imagem, vídeo ou voz. O Claude pergunta qual você quer usar."],
          ["Vídeo de referência", "Um arquivo .mp4 no seu computador ou o link do vídeo."]
        ] },
      { h: "Passo a passo",
        passos: [
          { t: "Instale a skill",
            p: "Abra o terminal e rode o comando abaixo. Se ele perguntar para qual programa instalar, escolha o Claude Code.",
            label: "Cole no terminal",
            codigo: "npx skills add hypit-ai/hypit -g",
            nota: "Prefere não usar o terminal? Abra o Claude Code e mande: \"instala a skill do Hypit pra mim: https://github.com/hypit-ai/hypit\". Depois feche e abra o Claude Code e digite /hypit. Ela tem que aparecer na lista." },
          { t: "Não apareceu? Instale na mão no Windows",
            p: "No PowerShell:",
            label: "Cole no PowerShell",
            codigo: "git clone https://github.com/hypit-ai/hypit.git\nCopy-Item -Recurse hypit\\skills\\hypit \"$env:USERPROFILE\\.claude\\skills\\hypit\"",
            nota: "O arquivo tem que ficar em C:\\Users\\SEU-USUARIO\\.claude\\skills\\hypit\\SKILL.md, junto com a pasta references. Se ficar uma pasta hypit dentro de outra, o Claude não encontra." },
          { t: "Não apareceu? Instale na mão no macOS ou Linux",
            label: "Cole no terminal",
            codigo: "git clone https://github.com/hypit-ai/hypit.git\nmkdir -p ~/.claude/skills\ncp -r hypit/skills/hypit ~/.claude/skills/" },
          { t: "Crie uma pasta para o vídeo",
            p: "Crie uma pasta vazia, por exemplo Documentos/videos/meu-primeiro-hypit, coloque o vídeo de referência dentro dela e abra o Claude Code nessa pasta. Ali ficam o roteiro, as cenas e o vídeo final. Na primeira vez, o Claude confere se falta alguma coisa e instala para você." },
          { t: "Peça o clone",
            p: "Troque o que está entre colchetes pelo seu:",
            label: "Mande no Claude Code",
            codigo: "/hypit Usa este vídeo como referência: [nome-do-arquivo.mp4].\nRefaz no mesmo formato, mas troca [o produto do vídeo] por [o meu produto: nome, o que faz, link].\nMantém a abertura e o ritmo. Em português do Brasil.",
            nota: "Outras trocas no mesmo pedido: \"usa o meu rosto, a foto está em eu.jpg\", \"usa a minha voz, tem um áudio meu em voz.mp3\", \"faz a versão em espanhol\" ou \"faz em quadrado para o feed\"." },
          { t: "Aprove o orçamento",
            p: "O Claude explica a referência, pergunta qual serviço usar e mostra o que vai gerar e quanto custa antes de começar. Se estiver de acordo, responda algo como: \"Pode usar a minha conta do HypiHub, dentro desse orçamento. Pode seguir.\" Se precisar passar do valor, ele pergunta de novo." },
          { t: "Ajuste e gere as versões",
            p: "O vídeo sai na pasta do projeto. Peça ajustes como \"deixa a legenda maior e amarela\" ou \"o gancho tá lento, corta o primeiro segundo\". Gostou? Peça as variações:",
            label: "Mande no Claude Code",
            codigo: "Gera 10 versões deste vídeo, cada uma com um gancho diferente nos primeiros 3 segundos. O resto fica igual. Me mostra o orçamento antes.",
            nota: "Só o que muda é gerado de novo. Peça o orçamento antes de mandar gerar muitas versões." }
        ] },
      { h: "Regras de uso",
        tabela: [
          ["Clone o formato, não a pessoa", "Use o seu rosto, a sua voz ou um avatar de IA. Usar o rosto ou a voz de outra pessoa sem autorização dá problema legal e de reputação."],
          ["Não reposte o vídeo dos outros", "A referência serve para aprender a estrutura. O vídeo que você publica tem que ser seu."],
          ["Os vídeos são seus", "Pode usar comercialmente e para clientes. A licença só proíbe vender o próprio Hypit ou oferecê-lo como serviço para outras pessoas."],
          ["Serviços de IA", "O que é gerado por serviço de terceiros pode ter regras próprias. Confira as do serviço que você escolher."]
        ] },
      { h: "Deu erro?",
        tabela: [
          ["/hypit não aparece", "Veja os passos de instalação na mão acima e feche e abra o Claude Code."],
          ["\"node: command not found\"", "Instale o Node.js LTS em nodejs.org e abra o terminal de novo."],
          ["Pede chave de API e você não tem", "Pergunte: \"me explica as opções de serviço e quanto custa cada uma\"."],
          ["Parou no meio", "Pergunte: \"por que parou? o que falta?\""],
          ["Não funciona no claude.ai", "Tem que ser no Claude Code. O chat não roda programas no seu computador."]
        ] }
    ],
    exemplo: "/hypit Faz um vídeo de ranking colocando [o meu produto] no topo."
  },
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
