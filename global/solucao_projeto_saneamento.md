# Solução: Mapa de Atenção ao Saneamento Básico

## Visão Geral

A solução proposta é um sistema de cidade inteligente chamado **Mapa de Atenção ao Saneamento Básico**. Seu objetivo é identificar, validar e priorizar locais com possíveis indícios de esgoto a céu aberto, acúmulo de resíduos orgânicos ou contaminação ambiental.

O sistema não pretende afirmar, de imediato, que existe esgoto em um determinado local. Ele funciona como uma **trilha de triagem e alerta precoce**, reunindo informações de sensores, moradores, imagens de satélite e dados territoriais para direcionar ONGs e organizações parceiras aos pontos com maior necessidade de atenção.

## Problema Atendido

Locais com saneamento precário ou esgoto a céu aberto podem causar diversos problemas, como:

- Contaminação de solo, córregos, rios e fontes de água utilizadas pela comunidade.
- Proliferação de mosquitos, ratos, baratas e outros vetores de doenças.
- Aumento do risco de doenças de veiculação hídrica, como diarreias, hepatite A e leptospirose.
- Mau odor, desconforto e queda na qualidade de vida dos moradores.
- Degradação de ruas, praças, margens de rios e áreas públicas.
- Dificuldade das autoridades e organizações em saber quais locais devem ser priorizados.

Muitas dessas áreas só recebem atenção depois que o problema já se tornou grave. A solução busca antecipar essa identificação por meio de dados e participação da comunidade.

## Como a Solução Funciona

O funcionamento é dividido em quatro etapas:

1. **Detecção inicial**
2. **Triagem local e validação do indício**
3. **Análise por imagens de satélite**
4. **Alerta para ONGs parceiras**

### Etapa 1 — Detecção inicial

A solução pode ser acionada de duas formas:

- **Registro do usuário:** um morador envia uma foto do local, a geolocalização e uma breve descrição do que observou, como odor forte, água escura, lixo acumulado, água parada ou esgoto aparente.
- **Sensor instalado em poste:** sensores posicionados em pontos estratégicos monitoram gases associados à decomposição de matéria orgânica, especialmente sulfeto de hidrogênio (H₂S) e amônia (NH₃).

Quando um sensor identifica uma concentração relevante, o local entra no sistema como um **indício de possível problema de saneamento**.

### Etapa 2 — Triagem local e validação do indício

Esta é a etapa intermediária entre a detecção inicial e a análise por satélite. Ela existe para reduzir falsos alarmes e verificar se o indício é consistente.

Durante essa etapa, o sistema realiza as seguintes ações:

- **Validação do sensor:** verifica se a leitura está dentro de uma faixa possível, identifica valores travados, picos isolados ou falhas de comunicação e compara os dados com sensores próximos, quando disponíveis.
- **Busca por relatos complementares:** verifica se outros moradores enviaram relatos na mesma região e período. Relatos independentes aumentam a confiabilidade do indício.
- **Confirmação comunitária:** o sistema pode enviar uma notificação para moradores próximos, perguntando se eles perceberam odor forte, água escura, lixo acumulado, água parada ou esgoto aparente.
- **Análise da foto:** se houver imagem, um modelo de visão computacional faz uma primeira classificação, como “possível esgoto”, “água parada”, “lixo orgânico”, “drenagem entupida” ou “não identificado”.
- **Verificação de fontes alternativas:** o sistema consulta dados territoriais para identificar aterros, lixões, ETEs, granjas, áreas de criação animal, corpos d’água, manguezais e áreas naturalmente alagadas próximas.
- **Cálculo da pontuação de suspeita:** o sistema combina intensidade e persistência do odor, número de relatos, qualidade da foto, proximidade de córregos, presença de fontes alternativas e histórico de denúncias.

A pontuação classifica o local em três níveis:

| Classificação | Significado |
|---|---|
| **Suspeita alta** | Há indícios persistentes, relatos consistentes e o contexto territorial é compatível com um possível problema de saneamento. |
| **Suspeita média** | Existem indícios, mas há possíveis fontes alternativas ou informações incompletas. |
| **Baixa prioridade** | Os indícios são fracos, isolados ou podem ser explicados por outra atividade. |

Somente locais com pontuação suficiente avançam para a próxima etapa.

### Etapa 3 — Análise por imagens de satélite

Para os locais com maior pontuação de suspeita, o sistema solicita e analisa imagens de satélite.

A análise busca reconhecer características do ambiente, como:

- Áreas alagadas ou com acúmulo persistente de água.
- Córregos, valas, rios e outros corpos d’água próximos.
- Padrões visuais associados a lançamentos irregulares ou áreas degradadas.
- Mudanças no ambiente ao longo do tempo.

As imagens de satélite não identificam diretamente a presença de esgoto. Elas funcionam como uma camada adicional de análise, ajudando a compreender o contexto do local e a fortalecer ou reduzir a suspeita.

### Etapa 4 — Alerta para ONGs parceiras

Somente os locais classificados como **suspeita alta** recebem um alerta final.

O alerta é enviado para ONGs e organizações que se cadastrarem e se disponibilizarem para atuar na causa. A mensagem pode conter:

- Localização aproximada do ponto.
- Data e horário das ocorrências.
- Foto enviada pelo usuário, quando disponível.
- Leituras dos sensores, quando disponíveis.
- Resultado da triagem local e da análise por satélite.
- Pontuação de suspeita e nível de prioridade.
- Recomendação de vistoria, campanha de conscientização ou ação de apoio.

## Exemplo de Funcionamento

Suponha que um sensor instalado em um poste detecte uma concentração elevada de H₂S.

1. O sistema registra a leitura e verifica se ela é consistente.
2. Moradores próximos recebem uma notificação para confirmar se perceberam odor forte, água escura ou acúmulo de resíduos.
3. Dois moradores enviam relatos e um deles envia uma foto de uma vala com água escura.
4. A foto é classificada como “possível esgoto ou água parada”.
5. O sistema verifica que não há aterro, ETE ou granja próximo ao local.
6. A área está próxima de um córrego e possui histórico de denúncias.
7. O sistema atribui uma pontuação alta de suspeita.
8. O sistema solicita imagens de satélite para analisar o entorno.
9. Se a imagem mostrar área alagada ou um padrão compatível, o caso é enviado às ONGs parceiras.

## Tecnologias Envolvidas

A solução pode utilizar as seguintes tecnologias:

- **Sensores de gás:** para detectar H₂S e NH₃.
- **Sensores ambientais:** para medir temperatura, umidade e condições climáticas.
- **Aplicativo móvel ou portal web:** para envio de fotos, localização e relatos pelos moradores.
- **Visão computacional:** para classificar imagens enviadas pelos usuários.
- **Banco de dados georreferenciado:** para armazenar relatos, leituras e ocorrências.
- **Imagens de satélite:** para análise do entorno e identificação de padrões ambientais.
- **Sistema de informações geográficas (SIG):** para cruzar a localização com mapas de saneamento, corpos d’água e áreas de risco.
- **Painel administrativo:** para ONGs e organizações acompanharem alertas, prioridades e histórico das áreas.

## Cuidados e Limitações

A presença de H₂S ou NH₃ não confirma, isoladamente, a existência de esgoto doméstico. Esses gases também podem surgir em aterros, composteiras, fossas, criação de animais, áreas alagadas e atividades industriais.

Por isso, o sistema deve ser apresentado como uma ferramenta de **triagem e alerta precoce**, e não como um laudo definitivo de contaminação.

A confirmação definitiva depende de vistoria em campo, análise da água e, quando necessário, exames laboratoriais. O objetivo da solução é direcionar a atenção para os locais certos, reduzindo o tempo entre a identificação de uma suspeita e a ação das organizações responsáveis.

## Resultado Esperado

Ao final, o projeto deve gerar um mapa dinâmico de áreas que demandam atenção em saneamento básico. Esse mapa permitirá que ONGs, comunidades e autoridades priorizem:

- Vistorias técnicas.
- Campanhas de conscientização.
- Melhorias estruturais.
- Ações de limpeza e manejo de resíduos.
- Apoio social às comunidades afetadas.

A solução torna o problema mais visível, organiza as informações disponíveis e cria um caminho claro entre a percepção de um indício e a ação das organizações que podem ajudar.
