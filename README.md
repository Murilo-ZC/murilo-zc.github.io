# 🚀 Portfolio - Murilo ZC

Portfolio pessoal desenvolvido com Expo Router e React Native Web.

## 🛠️ Tecnologias

- **Expo Router** - Roteamento e estrutura de páginas
- **React Native Web** - Interface multiplataforma
- **GitHub Pages** - Hospedagem estática

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

## 🚀 Deploy

### Deploy Automático (Recomendado)

O projeto está configurado com GitHub Actions para deploy automático:

1. **Push para main/master**: O deploy acontece automaticamente
2. **GitHub Actions**: Executa o build e deploy para GitHub Pages
3. **Site disponível**: https://murilo-zc.github.io

### Deploy Manual

```bash
# Build para produção
npm run build:web

# Ou usar o script completo
npm run deploy

# Testar localmente
npm run serve
```

### Scripts Disponíveis

```bash
npm start          # Servidor de desenvolvimento
npm run web        # Versão web apenas
npm run build      # Build de produção
npm run build:web  # Build específico para web
npm run deploy     # Build + arquivos de deploy
npm run serve      # Servidor local do build
npm run preview    # Build + servidor local
```

## 📁 Estrutura do Projeto

```
src/app/           # Páginas do Expo Router
├── _layout.js     # Layout principal
├── index.js       # Página inicial
├── projects/      # Página de projetos
├── repositories/  # Página de repositórios
└── llms/          # Página de LLMs
```

## 🔧 Configuração

### GitHub Pages

1. **Settings > Pages**
2. **Source**: Deploy from a branch
3. **Branch**: gh-pages
4. **Folder**: / (root)

### GitHub Actions

O workflow `.github/workflows/deploy.yml` está configurado para:
- Executar em pushes para main/master
- Fazer build com `npx expo export --platform web`
- Deployar para branch gh-pages
- Configurar arquivos necessários (.nojekyll, CNAME)

## 🧪 Teste Local

```bash
# Build e teste
npm run preview

# Ou manualmente
npm run build:web
npx serve dist
```

## 📞 Suporte

Para problemas com deploy:
1. Verifique os logs do GitHub Actions
2. Teste o build localmente primeiro
3. Confirme se a branch gh-pages foi criada
4. Verifique se o GitHub Pages está configurado corretamente

## 🚀 Funcionalidades

- **Página Inicial**: Apresentação pessoal, tecnologias e estatísticas
- **Repositórios**: Lista de projetos no GitHub
- **Projetos**: Projetos desenvolvidos além dos repositórios
- **LLMs**: Estratégias de Prompt Engineering

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