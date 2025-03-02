# 📱 NLW Pocket Mobile

![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Nearby é um aplicativo desenvolvido com intuito de aprender a trabalhar com aplicações mobile, ele foi desenvolvido durante o NLW Pocket Mobile, oferecido pela [Rocketseat](https://github.com/rocketseat-education).

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento de aplicações móveis com React.
- **Expo** - Ferramenta para simplificar o desenvolvimento e o build de apps React Native.
- **TypeScript** - Superset tipado do JavaScript para um código mais seguro e escalável.

## 📂 Estrutura do Projeto

A estrutura do projeto segue uma organização modularizada:

```
/nlw-pocket-mobile
├── assets            # Arquivos estáticos e ícones
├── src
│   ├── @types        # Definições de tipos TypeScript
│   ├── app           # Lógica principal do app (navegação, contexto, etc.)
│   ├── assets        # Imagens, ícones, fontes
│   ├── components    # Componentes reutilizáveis
│   ├── services      # Integração com API
│   ├── styles        # Estilos globais
│   ├── utils         # Funções auxiliares
├── .gitignore        # Arquivos ignorados pelo Git
├── app.json          # Configuração do Expo
├── package-lock.json # Lockfile do gerenciador de pacotes
├── package.json      # Dependências e scripts do projeto
├── tsconfig.json     # Configuração do TypeScript
├── README.md         # Documentação do projeto
```

## 📌 Funcionalidades

- [x] Filtrar por lugares no mapa
- [x] Ver a localização dos lugares no mapa
- [x] Usar a câmera para escanear o QR code para aplicar o cupom
- [x] Ver detalhes do lugar que deseja ir

## 🛠️ Como Rodar o Projeto

### Requisitos
- Node.js 20+
- Expo CLI

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/ismael-henrique-dev/Neaby-nlw-pocket-mobile.git
   cd nlw-pocket-mobile
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor Expo:
   ```bash
   npx expo start
   ```

4. Execute no emulador ou dispositivo:
   - No Android: escaneie o QR Code com o Expo Go.
   - No iOS: utilize o Expo Go ou rode via Xcode.

### 📚 Aprendizados

Durante o desenvolvimento do NLW Pocket Mobile, foram aplicados diversos conceitos importantes:

- Autenticação e consumo de API, aplicando boas práticas de integração.

- Boas práticas no desenvolvimento mobile, incluindo acessibilidade e performance.
