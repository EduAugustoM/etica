# SEMINÁRIO — LEGISLAÇÃO E ÉTICA PROFISSIONAL
## Tema: Direito Penal e Crimes Cibernéticos
**Curso:** Bacharelado em Sistemas de Informação  
**Disciplina:** Legislação e Ética  
**Integrantes:** Eduardo Augusto, José Marcos e Marcos Vinícius  
**Professora:** Ana Clara  
**Data da Apresentação:** 09 de Novembro de 2026  

---

### Sumário
1. [Visão Geral e Arquitetura da Apresentação](#1-visão-geral-e-arquitetura-da-apresentação)
2. [Guia de Execução Rápida (Como Apresentar)](#2-guia-de-execução-rápida-como-apresentar)
3. [Roteiro Slide a Slide com Notas do Apresentador](#3-roteiro-slide-a-slide-com-notas-do-apresentador)
4. [Ficha Técnica dos Vídeos Obrigatórios e Plano de Exibição](#4-ficha-técnica-dos-vídeos-obrigatórios-e-plano-de-exibição)
5. [Análise das Notícias Atuais](#5-análise-das-notícias-atuais)
   - 5.1 Megarroubo de US$ 6,3 bilhões na Binance (29/10/2026)
   - 5.2 Sabotagem de Freezers a 50 °C em Supermercados na Europa (Out–Nov/2026)
6. [Estudo de Caso Obrigatório: Caso Real C&M Software / PIX (Julho/2025)](#6-estudo-de-caso-obrigatório-caso-real-cm-software--pix-julho2025)
7. [Discussão para a Turma: 3 Perguntas e Guia de Moderação](#7-discussão-para-a-turma-3-perguntas-e-guia-de-moderação)
8. [Referências Bibliográficas e Fontes (Norma ABNT)](#8-referências-bibliográficas-e-fontes-norma-abnt)

---

## 1. Visão Geral e Arquitetura da Apresentação

A apresentação foi desenvolvida sob medida em formato web moderno (HTML5, CSS3 moderno e JavaScript puro), com proporção nativa **16:9 (1920×1080 px)** auto-ajustável para qualquer projetor ou monitor. 

### Identidade Visual e Estética
O design foi construído com base na estética **Editorial Cyberpunk / Futuristic Acid**, inspirado nas principais tendências de design de 2026 (Matrix/Machina, contrastes de alto impacto):
- **Paleta de cores:** Fundo preto profundo (`#0b0b0c`), verde-ácido elétrico (`#c8ff00`), violeta vibrante (`#8b5cf6`), e slides de alto contraste em papel creme (`#e9e4d8`).
- **Tipografia:** Família *Anton* para títulos display monumentais, *Space Grotesk* para textos de apoio, *JetBrains Mono* para código e citações de leis, e *Silkscreen* para tipografia pixelada vertical.
- **Gráficos:** Scanlines CRT sutis, ruído cinematográfico de meio-tom, wireframe de globo cibernético animado em SVG e molduras técnicas com cantoneiras neon.
- **Fotografia:** Fotografias conceituais geradas para o seminário (retrato mascarado cyberpunk, corredor de freezers sob luz violeta, cofre cripto fragmentado e o insider de TI diante de telas).

---

## 2. Guia de Execução Rápida (Como Apresentar)

### Opção A — Execução com Servidor Local (Recomendado)
Para que os iframes do YouTube funcionem sem bloqueios de segurança (`file://`), basta dar duplo clique no arquivo:
```
abrir-apresentacao.bat
```
Ele iniciará um servidor HTTP local na porta `8080` e abrirá a apresentação automaticamente no navegador padrão.

### Opção B — Abrir Diretamente
Se preferir, dê duplo clique em `index.html`. Toda a navegação, imagens e efeitos visuais funcionarão normalmente.

### Teclas de Atalho:
- `→` / `Espaço` / `PageDown`: Avançar slide.
- `←` / `PageUp`: Voltar slide.
- `F`: Ativar/desativar modo Tela Cheia (*Fullscreen*).
- `N`: Exibir/ocultar as **Notas do Apresentador** na barra inferior.
- `1`, `2`, `3`, `4`: No slide de vídeos (slide 15), amplia o vídeo correspondente em tela cheia.
- `Esc`: Fecha a ampliação do vídeo.
- `Home` / `End`: Ir direto para o primeiro ou último slide.

---

## 3. Roteiro Slide a Slide com Notas do Apresentador

| Slide | Título / Código | Conteúdo Principal | Notas para Fala do Apresentador |
|---|---|---|---|
| **01** | `BOOT_SEQUENCE` | Capa: Título, escopo do seminário, nomes dos integrantes. | *"Bom dia a todos. Hoje apresentamos o seminário de Legislação e Ética sobre Direito Penal e Crimes Cibernéticos, conectando os artigos de lei com a nossa prática em Sistemas de Informação."* |
| **02** | `INDEX.SYS` | Sumário da apresentação em 11 tópicos estruturados. | *"Nosso objetivo central é responder três perguntas: Quando uma conduta técnica vira crime? Qual lei se aplica? E como isso atinge o profissional de TI?"* |
| **03** | `CONTEXTO` | A migração do crime para a rede; anonimato e novas ferramentas (IA, IoT). | *"O crime de rua migrou para o digital. Com internet e PIX, a escala é massiva e o custo para o criminoso é quase zero. Conectamos aqui aos vídeos 1, 2 e 3."* |
| **04** | `DIREITO_PENAL.BASE` | Princípios penais: Legalidade estrita, Anterioridade, Reserva Legal. | *"Princípio basilar: não há crime sem lei anterior que o defina. Por isso, condutas novas na internet exigem leis específicas. O juiz não pode inventar crime por analogia."* |
| **05** | `CRIME = F(T,I,C)` | Conceito analítico: Fato Típico + Ilícito + Culpável. | *"O mesmo comando técnico (como um scanner de portas ou exploit) pode ser crime ou trabalho lícito. O que muda? A autorização do titular, que afasta a ilicitude no pentest contratado."* |
| **06** | `KERNEL_PENAL` | 6 Chaves penais: Dolo x Culpa, Tentativa, Concurso (art. 29), Omissão de Garantidor (art. 13 §2º), Territorialidade e Ordem Superior. | *"Atenção aqui: crimes cibernéticos no CP são dolosos. Não há 'invasão culposa'. Mas quem tem a senha e vende, ou ajuda o hacker, responde pelo crime integral por força do art. 29."* |
| **07** | `CIBERCRIME.DEF` | Crimes Próprios vs. Impróprios e linha do tempo de 2012 a 2024. | *"Crimes próprios atacam o sistema informático em si. Crimes impróprios usam o computador como ferramenta para estelionato ou calúnia. Vejam como a legislação avançou de 2012 até a Convenção de Budapeste."* |
| **08** | `THREAT_MAP` | Mapa de crimes comuns: Honra, Injúria Racial, 218-C, ECA 241-C, Stalking. | *"Na delegacia, a maioria dos crimes são ofensas à honra (com pena triplicada na rede), 'revenge porn' e agora deepfakes sexuais envolvendo menores pelo ECA."* |
| **09** | `ART_154-A.EXE` | Invasão de dispositivo: a revolução da Lei 14.155/2021. | *"Ponto crucial para a prova e para a vida: em 2021 a lei retirou a exigência de quebra de mecanismo de segurança. Hoje, basta a ausência de autorização do usuário!"* |
| **10** | `ART_154-A.MODS` | Qualificadoras do 154-A: controle remoto, segredos, ferramentas (§1º) e DDoS (art. 266). | *"Se o invasor obtém segredos comerciais ou assume controle remoto, a pena salta para 2 a 5 anos de reclusão. Criar programa com o fim exclusivo de invadir também é punido."* |
| **11** | `FRAUD_ENGINE` | Fraude Eletrônica (171 §2º-A) vs. Furto Mediante Fraude (155 §4º-B). | *"Diferença clássica: no estelionato/fraude eletrônica, a vítima é enganada e entrega o bem. No furto eletrônico, o criminoso subtrai o valor pelo sistema sem que a vítima perceba."* |
| **12** | `DATA_LEAK` | Vazamento indevido nas esferas Penal, Administrativa (LGPD) e Trabalhista. | *"A LGPD não é lei penal! Ela aplica multas administrativas de até 50 milhões. Já no Código Penal, o vazamento pode ser violação de segredo profissional (art. 154) ou funcional (art. 325)."* |
| **13** | `FORENSICS` | Prova digital: Marco Civil da Internet, Cadeia de Custódia e Ata Notarial. | *"No ambiente digital, print de tela pode ser contestado facilmente. A vítima deve registrar ata notarial ou hash de validação, e a equipe de TI deve preservar logs sem alterar discos."* |
| **14** | `SYSADMIN.LIABILITY` | A responsabilidade do profissional de TI: Autor, Partícipe, Garantidor ou Dev. | *"Quem tem credenciais administrativas tem maior dever ético. Obedecer ordem ilegal do chefe privado não isenta o profissional de responsabilidade criminal."* |
| **15** | `VIDEO_FEED` | Página dedicada com os 4 vídeos embedados do YouTube. | *"Esta é a central de vídeos. Ao clicar no botão de expandir (ou teclas 1 a 4), o player amplia para exibição da turma."* |
| **16** | `VIDEO_LINK.MAP` | Tabela analítica: Contexto, Relação com o Conteúdo e Pontos de Comentário. | *"Respeitamos a regra do seminário (até 3 vídeos, 5 a 15 min total). Exibimos V01 + V02 + trecho do V04, totalizando 14m50s. O V03 fica como material complementar entregue à turma."* |
| **17** | `RADAR_2026` | Divisor de impacto para Notícias Recentes de 2026. | *"Vamos agora aplicar esses conceitos a dois fatos emblemáticos das últimas semanas."* |
| **18** | `NEWS//BINANCE` | Caso Binance: Megarroubo de US$ 6,3 bilhões (29/10/2026). | *"O maior ataque cripto da história não quebrou a blockchain. O vetor foi o laptop comprometido de um engenheiro. Enquadramento: invasão qualificada e furto eletrônico qualificado."* |
| **19** | `NEWS//COLD_CHAIN` | Caso Freezers a 50 °C na Europa: Sabotagem de sistemas de refrigeração. | *"Hackers invadiram sistemas IoT de supermercados e ligaram o degelo a 50 °C. O crime cibernético agora causa dano físico e afeta a cadeia de alimentos. Enquadramento: art. 154-A §3º e art. 163."* |
| **20** | `CASE_FILE//C&M` | Estudo de caso real: C&M Software e o desvio de R$ 541 milhões no PIX (2025). | *"O caso brasileiro mais chocante da nossa área: um analista pós-graduado vendeu login por R$ 5 mil e ajudou criminosos a desviar mais de meio bilhão de contas reserva do PIX."* |
| **21** | `CASE_FILE//ANALYSIS` | Tabela analítica do caso C&M: Fato → Problema Jurídico → Conceito → Lei. | *"Aqui está a amarração jurídica do seminário: por que foi furto e não estelionato? Por que a venda da credencial é art. 29? E por que corrupção privada ainda é uma lacuna legal no Brasil?"* |
| **22** | `CASE_FILE//PATCH` | Consequências legais e soluções fundamentadas de Segurança da Informação. | *"Como profissionais de TI, o que evitaria isso? Zero Trust, arquitetura de quatro olhos (dupla aprovação em transações críticas), PAM e monitoramento comportamental."* |
| **23** | `OPEN_THREAD` | 3 Perguntas abertas para estimular o debate com a turma. | *"Agora abrimos a palavra aos colegas com as nossas três questões provocadoras sobre o caso real."* |
| **24** | `SHUTDOWN -R` | Conclusões: 5 linhas de log com os principais aprendizados. | *"Conclusão: o Direito Penal está cada vez mais presente na nossa rotina. Segurança não é só código, é processo e integridade ética."* |
| **25** | `SOURCES.TXT` | Referências bibliográficas completas e identificação dos links. | *"Disponibilizamos todos os artigos, leis do Planalto e links dos vídeos para consulta."* |
| **26** | `END_OF_TRANSMISSION` | Tela final de encerramento com globo e prompt interativo. | *"Muito obrigado! Estamos abertos a dúvidas."* |

---

## 4. Ficha Técnica dos Vídeos Obrigatórios e Plano de Exibição

### Vídeo 01 (V01)
- **Título Oficial:** *O que são crimes cibernéticos e por que eles crescem tanto? Professor responde \| DISCUTINDO DIREITO*
- **Canal / Emissora:** Jovem Pan News (Quadro *Discutindo Direito*, com Fernando Capez)
- **Especialista Convidado:** Prof. Dr. José Milagre (advogado especialista em Direito Digital e Perito Forense)
- **Data de Publicação:** Fevereiro de 2026
- **Duração Total:** 06 min 59 s
- **Link Direto:** [https://www.youtube.com/watch?v=UqOcX1VHTos](https://www.youtube.com/watch?v=UqOcX1VHTos)
- **Resumo do Conteúdo:** O professor explica a migração da criminalidade tradicional para a internet, a proliferação de fraudes com uso de engenharia social, os desafios investigativos causados por ferramentas de anonimização (VPNs e dark web), e defende a urgência da educação digital nas escolas e empresas.
- **Relação com o Seminário:** Conecta-se diretamente aos **Slides 03, 07 e 11**, demonstrando a diferença entre crimes próprios e impróprios e justificando a intervenção penal nas fraudes digitais.

---

### Vídeo 02 (V02)
- **Título Oficial:** *IA dificulta combate a crimes cibernéticos e coloca crianças em risco \| #SBTBrasil*
- **Canal / Emissora:** SBT News (Telejornal *SBT Brasil*)
- **Data de Publicação:** Agosto de 2025
- **Duração Total:** 03 min 23 s
- **Link Direto:** [https://www.youtube.com/watch?v=lo9oHmivXQw](https://www.youtube.com/watch?v=lo9oHmivXQw)
- **Resumo do Conteúdo:** Apresenta dados da ONG SaferNet Brasil indicando salto de 18% em denúncias de abuso sexual e pornografia infantil digital, destacando como softwares de Inteligência Artificial generativa são empregados para criar *deepfakes* pornográficos indistinguíveis da realidade a partir de fotos comuns.
- **Relação com o Seminário:** Conecta-se aos **Slides 03 e 08**, embasando a discussão sobre o art. 241-C do ECA (crime de simulação/montagem), o princípio da estrita legalidade e os limites éticos dos desenvolvedores de modelos de IA.

---

### Vídeo 03 (V03) — *Material Complementar*
- **Título Oficial:** *RISCO DE CRIMES VIRTUAIS: QUAIS OS CRIMES CIBERNÉTICOS MAIS COMUNS REGISTRADOS NO BRASIL*
- **Canal / Emissora:** TV Guaporeí (Afiliada Rede Record / Mato Grosso)
- **Data de Publicação:** Abril de 2021
- **Duração Total:** 07 min 19 s
- **Link Direto:** [https://www.youtube.com/watch?v=_ccU9AvMBsw](https://www.youtube.com/watch?v=_ccU9AvMBsw)
- **Resumo do Conteúdo:** Reportagem exibida durante o pico da pandemia da COVID-19, entrevistando autoridades policiais sobre os crimes digitais de maior incidência: calúnia/difamação, extorsão, vazamento íntimo (art. 218-C do CP) e golpes financeiros. Traz orientações práticas sobre obtenção de prints e confecção de ata notarial.
- **Relação com o Seminário:** Conecta-se aos **Slides 08, 11 e 13**, ilustrando a necessidade de preservação da prova digital e a cadeia de custódia pericial.

---

### Vídeo 04 (V04)
- **Título Oficial:** *Ataques cibernéticos e guerra híbrida colocam o Ocidente em alerta*
- **Canal / Emissora:** Jovem Pan (*Morning Show*)
- **Especialista Convidado:** Luiz Antonio Valle (analista de geopolítica e segurança estratégica)
- **Data de Publicação:** 04 de Novembro de 2026
- **Duração Total:** 10 min 43 s
- **Link Direto:** [https://www.youtube.com/watch?v=nvXFwfIFjJY](https://www.youtube.com/watch?v=nvXFwfIFjJY)
- **Resumo do Conteúdo:** Discute a evolução dos ciberataques como instrumentos de conflito geopolítico e guerra híbrida patrocinada por Estados. Alerta para a extrema vulnerabilidade de cadeias de infraestrutura crítica — especificamente **sistemas financeiros globais** e **redes de abastecimento e segurança alimentar**.
- **Relação com o Seminário:** Conecta-se diretamente aos **Slides 18 e 19**, servindo de prelúdio analítico para os casos reais da Binance e dos ataques aos freezers europeus.

---

### Plano Oficial de Exibição em Sala de Aula
> **Regra do Seminário:** Selecionar **até 3 vídeos**, com duração total entre **5 e 15 minutos**.
1. **Vídeo 1 (V01 - Jovem Pan / Milagre):** Exibição na íntegra $\rightarrow$ **06 min 59 s**
2. **Vídeo 2 (V02 - SBT Brasil / IA):** Exibição na íntegra $\rightarrow$ **03 min 23 s**
3. **Vídeo 4 (V04 - Morning Show / Guerra Híbrida):** Exibição de trecho selecionado (01:10 até 05:38) $\rightarrow$ **04 min 28 s**
- **Tempo Total em Sala:** **14 minutos e 50 segundos** (dentro do intervalo regulamentar de 5 a 15 min).
- *Observação Didática:* O Vídeo 03 é formalmente entregue e referenciado no material impresso como documentação de apoio.

---

## 5. Análise das Notícias Atuais

### 5.1 Megarroubo de US$ 6,3 bilhões na Binance (29 de Outubro de 2026)
- **O Fato:** Em 29/10/2026, a Binance (maior exchange de ativos digitais do planeta) sofreu o maior ataque hacker da história das finanças digitais, com o desvio de aproximadamente US$ 6,3 bilhões em criptoativos em cerca de 20 minutos.
- **Vetor Técnico:** Diferente de uma falha matemática nos algoritmos de criptografia ou nas redes blockchain, a intrusão ocorreu por meio do **notebook corporativo de um engenheiro de software com privilégios de alto nível**, que foi remotamente comprometido. Com isso, os invasores tiveram acesso direto a rotinas de autorização de saque.
- **Autoria:** Relatórios forenses das firmas de análise de blockchain (Chainalysis e TRM Labs) e autoridades norte-americanas apontaram o ataque para o grupo cibercriminoso de elite *TraderTraitor* (associado ao infame *Lazarus Group*, patrocinado pelo governo da Coreia do Norte).
- **Tipificação no Direito Penal Brasileiro:**
  1. *Artigo 154-A, §3º do CP:* Invasão qualificada de dispositivo informático com obtenção de dados sigilosos e obtenção de controle remoto não autorizado.
  2. *Artigo 155, §4º-B e §4º-C, inciso I do CP:* Furto mediante fraude eletrônica com utilização de infraestrutura/servidores sediados no exterior (aumento de pena de 1/3 a 2/3).
  3. *Lei 9.613/1998:* Crime de lavagem de capitais pela pulverização e dispersão das quantias em múltiplas carteiras frias e pontes cross-chain (*mixers*).
  4. *Artigos 5º e 7º do CP:* Aplicação do princípio da extraterritorialidade e cooperação internacional via Convenção de Budapeste (Decreto 11.491/2023).

---

### 5.2 Sabotagem de Freezers a 50 °C em Supermercados na Europa (Outubro–Novembro de 2026)
- **O Fato:** Em outubro de 2026, centenas de supermercados na França (redes como Carrefour e Monoprix) tiveram seus sistemas de refrigeração invadidos à distância. Os termostatos industriais foram forçados para até **50 °C**, provocando perda massiva de toneladas de alimentos perecíveis e focos de incêndio pelo superaquecimento dos compressores. No início de novembro de 2026, uma segunda onda coordenada atingiu supermercados na Bélgica (Delhaize, Carrefour, IKEA), Suécia (rede ICA), Luxemburgo e Estônia.
- **Vetor Técnico:** Invasão aos controladores lógicos programáveis (CLPs) e sistemas de telemetria IoT fornecidos por integradores terceirizados (ex.: Sabcobel). Os invasores acionaram deliberadamente as resistências elétricas no **modo de degelo contínuo**.
- **Análise Jurídico-Penal:**
  1. *Artigo 154-A, §3º do CP:* Controlador industrial conectado é indiscutivelmente "dispositivo informático". A tomada de controle remoto sem autorização qualifica o delito.
  2. *Artigo 163, parágrafo único, inciso IV do CP:* Dano qualificado por motivo egoístico ou com prejuízo econômico considerável para a vítima.
  3. *Artigo 250 do CP:* Crime de perigo comum (incêndio), configurado caso a manipulação das máquinas tenha gerado risco efetivo à integridade física de funcionários e clientes (dolo eventual).
  4. *Debate sobre Terrorismo (Lei 13.260/2016):* O art. 2º da Lei antiterrorismo prevê sabotagem mediante mecanismos cibernéticos, mas exige finalidade de xenofobia, discriminação ou preconceito, além de rol taxativo de instalações (supermercados comerciais não estão explicitamente no rol estrito, gerando discussão sobre os limites da tipicidade).

---

## 6. Estudo de Caso Obrigatório: Caso Real C&M Software / PIX (Julho/2025)

### Descrição Detalhada da Ocorrência
A **C&M Software (CMSW)** é uma tradicional empresa brasileira de tecnologia da informação especializada no desenvolvimento de soluções de mensageria financeira e gateways de integração. Ela fornece a infraestrutura homologada pelo Banco Central que interliga dezenas de instituições de pagamento, fintechs e bancos médios ao Sistema de Pagamentos Instantâneos (SPI / PIX).

Em **julho de 2025**, o sistema financeiro nacional foi abalado pelo desvio de pelo menos **R$ 541 milhões** (com estimativas de prejuízo total superiores a R$ 800 milhões) a partir de contas de reserva pertencentes a clientes da C&M, notadamente o Banco Master e a instituição BMP.

A investigação conduzida pela Polícia Civil de São Paulo (1ª Delegacia de Investigações Gerais do DEIC), com apoio do Banco Central e da Polícia Federal, revelou que o ataque não explorou vulnerabilidades no protocolo do PIX, mas sim a colaboração interna de um profissional de TI:
- **O Agente:** **João Nazareno Roque**, 48 anos, analista de tecnologia com pós-graduação na área, prestava serviços na empresa de tecnologia.
- **A Dinâmica da Cooptação:** Roque confessou à polícia que foi abordado por membros de uma quadrilha após sair de um bar próximo à sua residência.
- **O Crime:** Por uma quantia inicial de **R$ 5.000,00** (e recebimentos posteriores que somaram aproximadamente R$ 15.000,00), Roque forneceu seu login e senha pessoais com permissões de acesso administrativo à infraestrutura da empresa. Mais grave: a pedido dos cibercriminosos via telefone, Roque utilizou seu próprio computador funcional nas dependências da empresa para validar comandos e facilitar a emissão de ordens de pagamento fraudulentas.
- **A Execução:** Com as credenciais e rotinas liberadas, o grupo desviou valores milionários das contas de liquidação em questão de horas, pulverizando as quantias em contas laranjas de 29 instituições financeiras distintas.
- **Desfecho:** Roque foi preso em flagrante/preventiva em 03 de julho de 2025, confessando a participação. O Banco Central suspendeu temporariamente as operações de instituições ligadas à conexão da intermediadora.

### Tabela de Relação Explícita: Fatos $\leftrightarrow$ Conceitos $\leftrightarrow$ Legislação

| Fato Concreto do Caso | Problema Jurídico Identificado | Conceito Teórico Estudado | Dispositivo Legal Aplicável |
|---|---|---|---|
| Invasão do sistema financeiro com uso de credencial válida de funcionário. | O login era formalmente válido, mas o acesso era **sem autorização do usuário/empresa**. | Tipicidade estrita e dolo específico (Slide 09). | **Art. 154-A, §3º do Código Penal.** Não se exige mais quebra física de barreira. |
| Transferências e desvios de valores das contas de reserva do PIX. | Subtração patrimonial remota contra a vontade do titular, sem ludibriar a vítima a entregar o bem. | Distinção entre Estelionato e Furto Mediante Fraude (Slide 11). | **Art. 155, §4º-B do Código Penal** (Furto eletrônico, reclusão de 4 a 8 anos). |
| Atuação de João Nazareno vendendo a senha e digitando comandos. | O funcionário não arquitetou o golpe final sozinho, mas colaborou decisivamente para a sua execução. | Teoria Monista do Concurso de Pessoas (Slide 06 e 14). | **Artigo 29 do Código Penal:** quem concorre para o crime responde pelas penas a ele cominadas. |
| Pagamento de suborno a profissional do setor privado. | No Brasil, inexistência de tipo penal autônomo para "corrupção entre entes privados". | Princípio da Legalidade e Reserva Legal: proibição de analogia *in malam partem* (Slide 04). | **Artigo 1º do CP.** Ele responde pelo furto/invasão, e não por corrupção passiva (restrita a funcionário público, art. 317). |
| Dispersão do dinheiro em 29 instituições em minutos. | Dissimulação, ocultação e movimentação de recursos oriundos de infração penal por grupo organizado. | Organização Criminosa e Lavagem de Ativos. | **Lei nº 9.613/1998** (Lavagem de Dinheiro) e **Lei nº 12.850/2013** (Organização Criminosa). |
| Falhas nos controles internos da prestadora de serviços e das fintechs. | Ausência de mecanismos de alçada dupla e dependência de credencial única para operações de alto volume. | Responsabilidade Civil Objetiva e Compliance Regulatório (Slide 12). | **Art. 927 do Código Civil**; **Resoluções CMN nº 4.893/2021** e **BCB nº 85/2021** (Segurança Cibernética no SFN). |

### Consequências Fundamentadas e Soluções Técnicas de SI
1. **Para o Profissional:** Cumprimento de pena restritiva de liberdade em regime fechado (soma das penas cominadas aos arts. 154-A §3º, 155 §4º-B e Lei de Organização Criminosa, superando facilmente 10 anos de reclusão); demissão imediata por justa causa (art. 482, alínea "g" da CLT); responsabilidade civil de indenizar os danos causados; destruição irreversível da reputação profissional no mercado de TI.
2. **Para a Empresa:** Sanções regulatórias do Banco Central, perda de contratos comerciais, processos judiciais regressivos indenizatórios das instituições lesadas e abalo de imagem.
3. **Soluções Arquiteturais Mandatórias:**
   - **Autenticação Zero Trust e PAM (Privileged Access Management):** Nenhuma credencial pessoal deve ter permissão irrestrita permanente para movimentar contas de liquidação.
   - **Princípio dos Quatro Olhos (*Four-Eyes Principle*):** Toda e qualquer transação atípica ou de alta volumetria deve exigir aprovação criptográfica dupla e cruzada de diferentes operadores em dispositivos físicos segregados (tokens FIDO2/WebAuthn).
   - **Monitoramento Comportamental (UEBA):** Alertas em tempo real para disparos de comandos fora do expediente habitual, logins originados de novos IPs e volumes que destoem do perfil estatístico da instituição.
   - **Cultura e Ética de Prevenção a Ameaças Internas (*Insider Threats*):** Treinamentos obrigatórios contra engenharia social presencial e canais de *whistleblowing* (denúncia anônima) auditados externamente.

---

## 7. Discussão para a Turma: 3 Perguntas e Guia de Moderação

### Pergunta 1
> **"João Roque não utilizou exploits nem quebrou firewalls: ele apenas usou seu próprio login funcional e digitou comandos na sua mesa de trabalho. Sob a ótica penal, ele deve responder como autor da invasão (art. 154-A), como partícipe do furto mediante fraude (art. 155 §4º-B c/c art. 29) ou por ambos? O fato de ele ter recebido apenas R$ 15 mil enquanto o grupo desviou mais de R$ 540 milhões diminui sua culpa?"**

- **Objetivo da Pergunta:** Desmistificar a ideia de que "hacker" é apenas quem cria vírus e reforçar o instituto penal do concurso de pessoas e da tipicidade da invasão sem autorização.
- **Gabarito / Pontos a Conduzir:**
  - Pelo **artigo 29 do Código Penal** (Teoria Monista), todos que concorrem para o crime incidem nas penas a ele cominadas. A venda da senha e a digitação dos comandos foram a causa essencial para o resultado lesivo.
  - O descompasso entre a vantagem auferida (R$ 15 mil) e o prejuízo total (R$ 541 milhões) **não desclassifica o crime nem afasta sua gravidade**. Pode servir, no máximo, como circunstância judicial para a dosimetria da pena (art. 59 do CP), mas não isenta o agente da coautoria no furto eletrônico qualificado.
  - Desde a alteração da **Lei 14.155/2021**, o art. 154-A não exige violação de barreira técnica: acessar o sistema para finalidade criminosa sem a autorização legítima do titular configura a conduta típica.

---

### Pergunta 2
> **"Por que a conduta do grupo criminoso foi tipificada como Furto Mediante Fraude (Art. 155, §4º-B) e não como Fraude Eletrônica / Estelionato (Art. 171, §2º-A)? Qual é a diferença técnica e jurídica fundamental entre esses dois tipos penais? E se a quadrilha tivesse telefonado para a tesouraria do banco fingindo ser da diretoria do Banco Central para convencê-los a transferir o montante?"**

- **Objetivo da Pergunta:** Fixar a linha divisória entre a subtração clandestina e o vício de consentimento da vítima enganada.
- **Gabarito / Pontos a Conduzir:**
  - **No Furto Mediante Fraude (art. 155, §4º-B):** A fraude é utilizada como mecanismo para **burlar a vigilância** ou diminuir a segurança do sistema para que o criminoso **subtraia** a coisa por si mesmo, sem qualquer consentimento da vítima. O dinheiro do Banco Central/BMP foi retirado à revelia dos gestores das contas.
  - **Na Fraude Eletrônica / Estelionato (art. 171, §2º-A):** A fraude faz com que **a própria vítima, induzida a erro, entregue voluntariamente** a vantagem econômica ao estelionatário (ex.: transferir um falso PIX acreditando pagar uma conta real).
  - **No exemplo hipotético:** Se os criminosos tivessem convencido o tesoureiro a realizar a transferência bancária voluntariamente por telefone via falsa autoridade, a conduta se amoldaria ao estelionato digital do art. 171, §2º-A.

---

### Pergunta 3
> **"No ordenamento jurídico brasileiro, pagar propina a um funcionário de empresa privada para obter dados sigilosos ou violar sistemas NÃO é considerado crime de corrupção (a corrupção no Código Penal exige agente público). Isso representa uma lacuna da legislação brasileira diante do princípio da legalidade? Como nós, futuros gestores de Sistemas de Informação, devemos estruturar a governança técnica e os códigos de ética para blindar as organizações contra a cooptação de profissionais?"**

- **Objetivo da Pergunta:** Estimular a reflexão crítica entre Legalidade Penal (reserva legal estrita) e a responsabilidade da Governança de TI e Ética Profissional (SBC e ACM).
- **Gabarito / Pontos a Conduzir:**
  - Pelo **Princípio da Legalidade (Art. 5º, XXXIX da CF e Art. 1º do CP)**, não se pode aplicar o crime de corrupção ativa/passiva a relações estritamente corporativas privadas por analogia. Embora existam projetos de lei tramitando para tipificar a "corrupção privada", hoje os agentes só podem ser enquadrados por crimes patrimoniais (furto, concussão quando couber, violação de segredo ou organização criminosa).
  - No âmbito de Sistemas de Informação, a resposta não pode depender apenas do medo da sanção penal do Estado: deve residir na **governança de privilégios mínimos**, segregação irrestrita de funções, monitoramento contínuo de riscos internos (*Insider Threat Program*) e no compromisso deontológico dos Códigos de Ética da SBC (Sociedade Brasileira de Computação) e da ACM (*Association for Computing Machinery*).

---

## 8. Referências Bibliográficas e Fontes (Norma ABNT)

### Legislação Federal e Regulamentos
- BRASIL. **Constituição da República Federativa do Brasil de 1988**. Brasília, DF: Presidência da República. Disponível em: <http://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm>. Acesso em: 07 nov. 2026.
- BRASIL. **Decreto-Lei nº 2.848, de 7 de dezembro de 1940**. Código Penal. Brasília, DF: Presidência da República. Disponível em: <http://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm>. Acesso em: 07 nov. 2026.
- BRASIL. **Decreto-Lei nº 3.689, de 3 de outubro de 1941**. Código de Processo Penal (Cadeia de Custódia da Prova). Brasília, DF: Presidência da República. Disponível em: <http://www.planalto.gov.br/ccivil_03/decreto-lei/del3689compilado.htm>. Acesso em: 07 nov. 2026.
- BRASIL. **Lei nº 12.737, de 30 de novembro de 2012**. Dispõe sobre a tipificação criminal de delitos informáticos (Lei Carolina Dieckmann). Brasília, DF: Presidência da República. Disponível em: <http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm>. Acesso em: 07 nov. 2026.
- BRASIL. **Lei nº 12.965, de 23 de abril de 2014**. Estabelece princípios, garantias, direitos e deveres para o uso da Internet no Brasil (Marco Civil da Internet). Brasília, DF: Presidência da República. Disponível em: <http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm>. Acesso em: 07 nov. 2026.
- BRASIL. **Lei nº 13.709, de 14 de agosto de 2018**. Lei Geral de Proteção de Dados Pessoais (LGPD). Brasília, DF: Presidência da República. Disponível em: <http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm>. Acesso em: 07 nov. 2026.
- BRASIL. **Lei nº 14.155, de 27 de maio de 2021**. Altera o Decreto-Lei nº 2.848/1940 (Código Penal), para agravar as penas dos crimes de violação de dispositivo informático, furto e estelionato cometidos de forma eletrônica. Brasília, DF: Presidência da República. Disponível em: <http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14155.htm>. Acesso em: 07 nov. 2026.
- BRASIL. **Decreto nº 11.491, de 12 de abril de 2023**. Promulga a Convenção sobre o Crime Cibernético, firmada em Budapeste, em 23 de novembro de 2001. Brasília, DF: Presidência da República. Disponível em: <http://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11491.htm>. Acesso em: 07 nov. 2026.
- BANCO CENTRAL DO BRASIL; CONSELHO MONETÁRIO NACIONAL. **Resolução CMN nº 4.893, de 23 de dezembro de 2020**. Dispõe sobre a política de segurança cibernética e sobre os requisitos para a contratação de serviços de processamento e armazenamento de dados e de computação em nuvem a serem observados pelas instituições autorizadas a funcionar pelo Banco Central do Brasil. Brasília, DF: BCB, 2020.

---

### Notícias e Reportagens Consultadas
- AGÊNCIA BRASIL. **Funcionário que deu acesso a hackers executarem fraude é preso: Ele confessou participação ao vender seu login e senha por R$ 5 mil**. Brasília, DF: EBC, 03 jul. 2025. Disponível em: <https://agenciabrasil.ebc.com.br/geral/noticia/2025-07/funcionario-que-deu-acesso-hackers-executarem-fraude-e-preso>. Acesso em: 07 nov. 2026.
- AL JAZEERA. **Binance says $6.3bn stolen in biggest crypto heist in history: A blockchain intelligence firm attributes the attack to North Korean state-sponsored hackers**. Doha: Al Jazeera Media Network, 30 out. 2026. Disponível em: <https://www.aljazeera.com/economy/2026/10/30/binance-says-2-54bn-in-crypto-funds-frozen-amid-potential-security-issue>. Acesso em: 07 nov. 2026.
- BBC NEWS BRASIL. **Binance sofre ataque hacker de US$ 6,3 bilhões: por que Coreia do Norte pode estar por trás do possível maior roubo da história das criptomoedas**. Londres: BBC, 30 out. 2026. Disponível em: <https://www.bbc.com/portuguese/articles/c820v2x0zvqko>. Acesso em: 07 nov. 2026.
- DEUTSCHE WELLE (DW BRASIL). **A nova onda de ataques hacker a supermercados na Europa: Invasão a sistemas de refrigeração afetou redes varejistas em sete países**. Berlim: DW, 02 nov. 2026. Disponível em: <https://www.dw.com/pt-br/o-que-se-sabe-sobre-nova-onda-de-ataques-hacker-a-supermercados-na-europa/a-79833140>. Acesso em: 07 nov. 2026.
- ESTADÃO. **Funcionário de TI diz à Polícia que recebeu R$ 15 mil para entregar login e senha a hackers: Terceirizado da C&M Software confessou inserção de comandos nos sistemas da empresa**. São Paulo: Grupo Estado, 04 jul. 2025. Disponível em: <https://www.estadao.com.br/politica/blog-do-fausto-macedo/funcionario-ti-depoimento-policia-login-senha-ataque-hacker/>. Acesso em: 07 nov. 2026.
- G1. **Hackers atacam supermercados europeus e elevam temperatura de freezers a 50°C: Problemas atingiram lojas na Bélgica, Luxemburgo, Suécia e Estônia**. Rio de Janeiro: Globo Comunicação e Participações, 02 nov. 2026. Disponível em: <https://g1.globo.com/tecnologia/ciberseguranca/noticia/2026/11/02/hackers-atacam-supermercados-europeus-e-elevam-temperatura-de-freezers-a-50c.ghtml>. Acesso em: 07 nov. 2026.
- G1. **Hackers invadem geladeiras de supermercados na França, elevam temperatura a 50°C e provocam incêndios**. Rio de Janeiro: Globo Comunicação e Participações, 12 out. 2026. Disponível em: <https://g1.globo.com/tecnologia/ciberseguranca/noticia/2026/10/12/hackers-invadem-geladeiras-de-supermercados-na-franca-elevam-temperatura-a-50c-e-provocam-incendios.ghtml>. Acesso em: 07 nov. 2026.
- VALOR ECONÔMICO. **O que se sabe até agora sobre o maior crime financeiro da história do Brasil: Ataque hacker a prestadora de serviços do Pix que desviou ao menos R$ 541 milhões**. São Paulo: Globo / Valor, 08 jul. 2025. Disponível em: <https://valor.globo.com/financas/noticia/2025/07/08/o-que-se-sabe-at-agora-sobre-o-maior-crime-financeiro-da-histria-do-brasil.ghtml>. Acesso em: 07 nov. 2026.

---

### Vídeos Selecionados (Audiovisual)
- JOVEM PAN NEWS. **O que são crimes cibernéticos e por que eles crescem tanto? Professor responde \| DISCUTINDO DIREITO**. Apresentador: Fernando Capez. Entrevistado: José Milagre. São Paulo: Jovem Pan, 11 fev. 2026. 1 vídeo (6 min 59 s). Publicado pelo canal Jovem Pan News. Disponível em: <https://www.youtube.com/watch?v=UqOcX1VHTos>. Acesso em: 07 nov. 2026.
- MORNING SHOW (JOVEM PAN). **Ataques cibernéticos e guerra híbrida colocam o Ocidente em alerta**. Comentarista: Luiz Antonio Valle. São Paulo: Jovem Pan, 04 nov. 2026. 1 vídeo (10 min 43 s). Publicado pelo canal Morning Show. Disponível em: <https://www.youtube.com/watch?v=nvXFwfIFjJY>. Acesso em: 07 nov. 2026.
- SBT BRASIL. **IA dificulta combate a crimes cibernéticos e coloca crianças em risco \| #SBTBrasil**. Brasília/São Paulo: SBT News, 21 ago. 2025. 1 vídeo (3 min 23 s). Publicado pelo canal SBT News. Disponível em: <https://www.youtube.com/watch?v=lo9oHmivXQw>. Acesso em: 07 nov. 2026.
- TV GUAPOREÍ. **RISCO DE CRIMES VIRTUAIS: QUAIS OS CRIMES CIBERNÉTICOS MAIS COMUNS REGISTRADOS NO BRASIL**. Pontes e Lacerda, MT: Rede Record / REC8, 15 abr. 2021. 1 vídeo (7 min 19 s). Publicado pelo canal TV Guaporei. Disponível em: <https://www.youtube.com/watch?v=_ccU9AvMBsw>. Acesso em: 07 nov. 2026.

