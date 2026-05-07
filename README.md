# EBAC Store Mobile Tests - iOS

Projeto de automação mobile iOS utilizando Appium, WebdriverIO e Sauce Labs.

## Tecnologias utilizadas

- Node.js
- WebdriverIO
- Appium
- Sauce Labs
- JavaScript

## Ambiente

Os testes foram executados em ambiente cloud utilizando Sauce Labs com dispositivos iOS.

## Cenários automatizados

- Inicialização do aplicativo
- Navegação para tela de login
- Validação da tela inicial
- Navegação entre abas do aplicativo
- Validação de elementos da interface

## Estrutura dos testes

```bash
test/specs
```

## Execução dos testes

### Instalar dependências

```bash
npm install
```

### Executar testes

```bash
npm run test:smoke
npm run test:account
npm run test:searchios
npm run test:productios
npm run test:cartios
npm run test:checkoutios
```

## Branch utilizada

```bash
ios
```

## Repositório

Projeto desenvolvido para atividade prática de automação mobile iOS da EBAC.
