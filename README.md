# NLW Pocket Mobile

![React Native](https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NativeWind](https://img.shields.io/badge/NativeWind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-8B5CF6?style=for-the-badge)
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)

NLW Pocket Mobile é um aplicativo desenvolvido com **React Native**, **Expo**, **TypeScript**, **NativeWind**, **Zod** e **React Query**, projetado para proporcionar uma experiência rápida e eficiente na gestão de anotações e lembretes.

## Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento de aplicações móveis com React.
- **Expo** - Ferramenta para simplificar o desenvolvimento e o build de apps React Native.
- **TypeScript** - Superset tipado do JavaScript para um código mais seguro e escalável.
- **NativeWind** - Biblioteca de estilização baseada em TailwindCSS para React Native.
- **Zod** - Biblioteca para validação e tipagem de dados de entrada.
- **React Query** - Gerenciamento de estados assíncronos e cache para requisições HTTP.

## Repositório do Backend

O backend do projeto está disponível em:
[NLW Pocket - Backend](https://github.com/seu-usuario/nlw-pocket-backend)

## Como Rodar o Projeto

### Requisitos
- Node.js 18+
- Expo CLI
- Emulador Android/iOS ou dispositivo físico

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nlw-pocket-mobile.git
   cd nlw-pocket-mobile
   ```

2. Instale as dependências:
   ```bash
    npm install
    # ou
    yarn install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` e adicione as variáveis necessárias (veja `.env.example`).

4. Inicie o servidor Expo:
   ```bash
   npx expo start
   ```

5. Execute no emulador ou dispositivo:
   - No Android: escaneie o QR Code com o Expo Go.
   - No iOS: utilize o Expo Go ou rode via Xcode.

## Estrutura do Projeto

A estrutura do projeto segue uma organização modularizada:

```
/nlw-pocket-mobile
├── assets            # Arquivos estáticos e ícones
├── src
│   ├── components    # Componentes reutilizáveis
│   ├── screens       # Telas da aplicação
│   ├── hooks         # Hooks customizados
│   ├── services      # Integração com API
│   ├── contexts      # Contextos globais do app
│   ├── utils         # Funções auxiliares
│   ├── validators    # Esquemas de validação com Zod
├── .gitignore        # Arquivos ignorados pelo Git
├── app.json          # Configuração do Expo
├── babel.config.js   # Configuração do Babel
├── package.json      # Dependências e scripts do projeto
├── tsconfig.json     # Configuração do TypeScript
├── README.md         # Documentação do projeto
```

## Aprendizados

Durante o desenvolvimento do **NLW Pocket Mobile**, aprendemos e aplicamos conceitos importantes:
- **Renderização eficiente** e estilização responsiva com NativeWind.
- **Gerenciamento de estado global** e cache de requisições com React Query.
- **Validação de dados** com Zod para garantir a integridade do sistema.
- **Autenticação e conexão com API**, aplicando boas práticas de consumo de dados.
- **Boas práticas no desenvolvimento mobile**, incluindo acessibilidade e performance.

## Contato
Caso tenha dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato.

---

**Feito com React Native e muita energia! 🚀**

