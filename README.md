# Murilo Zanini de Carvalho - Portfolio

Portfolio pessoal desenvolvido com Expo e React Native, otimizado para web.

## 🚀 Tecnologias

- **Expo** - Framework para desenvolvimento multiplataforma
- **React Native** - Framework para desenvolvimento mobile
- **React Navigation** - Navegação entre telas
- **Expo Router** - Sistema de roteamento baseado em arquivos

## 📱 Funcionalidades

- **Página Inicial**: Apresentação pessoal, tecnologias e estatísticas
- **Repositórios**: Lista de projetos no GitHub
- **Projetos**: Projetos desenvolvidos além dos repositórios
- **LLMs**: Estratégias de Prompt Engineering

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Expo CLI

### Instalação
```bash
# Clone o repositório
git clone https://github.com/murilo-zc/murilo-zc.github.io.git
cd murilo-zc.github.io

# Instale as dependências
npm install

# Execute o projeto
npm start
```

### Scripts Disponíveis
- `npm start` - Inicia o servidor de desenvolvimento
- `npm run web` - Executa apenas a versão web
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm run build` - Gera build de produção
- `npm run build:web` - Gera build web para deploy

## 🌐 Deploy

O projeto está configurado com GitHub Actions para deploy automático no GitHub Pages.

### Pipeline de Deploy
1. Push para `main` ou `master` branch
2. GitHub Actions executa o build
3. Deploy automático para GitHub Pages
4. Site disponível em: https://murilo-zc.github.io

### Configuração do GitHub Pages
1. Vá em Settings > Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Folder: / (root)

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── _layout.js          # Layout principal
│   ├── index.js            # Página inicial
│   ├── repositories/       # Página de repositórios
│   ├── projects/          # Página de projetos
│   └── llms/              # Página de estratégias LLM
assets/                     # Imagens e ícones
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: carvalho.zanini@gmail.com
- **LinkedIn**: [Murilo Zanini de Carvalho](https://www.linkedin.com/in/murilo-zanini-de-carvalho-0980415b/)
- **GitHub**: [@murilo-zc](https://github.com/murilo-zc) 