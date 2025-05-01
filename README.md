# FutMetrics

## Descrição do Projeto

FutMetrics é uma aplicação TypeScript que realiza web scraping de estatísticas de futebol para calcular previsões de desempenho em partidas. O projeto analisa dados históricos de times, como gols, cartões e escanteios, para gerar expectativas estatísticas para jogos futuros.

## Funcionalidades

- **Web Scraping**: Coleta dados de times e partidas de futebol de sites esportivos
- **Análise Estatística**: Calcula médias e previsões para:
  - Gols marcados e sofridos
  - Cartões recebidos
  - Escanteios a favor e contra
- **Previsões de Partidas**: Gera expectativas estatísticas para confrontos específicos

## Tecnologias Utilizadas

- **TypeScript**: Linguagem principal do projeto
- **Node.js**: Ambiente de execução
- **Axios**: Cliente HTTP para requisições web
- **Cheerio**: Biblioteca para parsing de HTML e web scraping
- **Dotenv**: Gerenciamento de variáveis de ambiente

## Estrutura do Projeto

A estrutura do projeto foi reorganizada para melhor manutenção e escalabilidade:

```
FutMetrics/
├── src/
│   ├── config/
│   │   └── env.ts            # Configurações de ambiente
│   ├── interfaces/
│   │   └── types.ts          # Definição de tipos e interfaces
│   ├── services/
│   │   └── scraping/         # Serviços de web scraping
│   │       └── getInfo.ts
│   ├── utils/
│   │   ├── scraping.ts       # Funções auxiliares para scraping
│   │   └── calculations.ts   # Funções de cálculos estatísticos
│   └── index.ts              # Ponto de entrada da aplicação
├── dist/                     # Código compilado
├── package.json              # Dependências e scripts
└── tsconfig.json             # Configuração do TypeScript
```

## Configuração do Projeto

O projeto agora utiliza configurações otimizadas no `tsconfig.json`:

- Diretório de saída definido como `./dist`
- Diretório raiz definido como `./src`
- Suporte a módulos CommonJS
- Verificação estrita de tipos habilitada

## Scripts Disponíveis

```bash
# Executar o projeto
npm start

# Executar em modo de desenvolvimento com recarga automática
npm run dev

# Compilar o projeto
npm run build
```

## Exemplo de Uso

O projeto está configurado para analisar confrontos entre times brasileiros, como o exemplo entre Santos e RB Bragantino, calculando:

- Expectativa de gols para cada time e total da partida
- Expectativa de cartões para cada time e total da partida
- Expectativa de escanteios para cada time e total da partida

## Como Contribuir

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Envie para o branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença ISC - veja o arquivo `package.json` para mais detalhes.