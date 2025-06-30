# 🚀 Guia de Deploy

Este documento explica como configurar e fazer deploy do portfolio no GitHub Pages.

## 📋 Pré-requisitos

1. **Repositório no GitHub**: O repositório deve estar em `https://github.com/murilo-zc/murilo-zc.github.io`
2. **GitHub Actions habilitado**: Verifique se as Actions estão ativas no repositório
3. **GitHub Pages configurado**: Configure o GitHub Pages para usar a branch `gh-pages`

## ⚙️ Configuração do GitHub Pages

### 1. Configurar GitHub Pages
1. Vá para `Settings` > `Pages`
2. Em `Source`, selecione `Deploy from a branch`
3. Em `Branch`, selecione `gh-pages` e `/ (root)`
4. Clique em `Save`

### 2. Configurar GitHub Actions
O arquivo `.github/workflows/deploy.yml` já está configurado e irá:
- Executar em pushes para `main` ou `master`
- Fazer build do projeto
- Deployar automaticamente para GitHub Pages

## 🔧 Scripts Disponíveis

### Desenvolvimento
```bash
npm start          # Inicia servidor de desenvolvimento
npm run web        # Executa apenas versão web
npm run preview    # Build + servidor local para teste
```

### Build e Deploy
```bash
npm run build      # Build de produção
npm run build:web  # Build específico para web
npm run serve      # Servidor local do build
npm run deploy     # Build + arquivo .nojekyll
```

## 🌐 Deploy Automático

### Como funciona:
1. **Push para main/master**: Dispara o workflow
2. **Build**: Gera arquivos estáticos em `./dist`
3. **Deploy**: Envia para branch `gh-pages`
4. **GitHub Pages**: Serve os arquivos automaticamente

### Monitoramento:
- Vá para `Actions` no GitHub para ver o progresso
- O site estará disponível em: `https://murilo-zc.github.io`

## 🧪 Teste Local

### Antes do deploy:
```bash
# Build local
npm run build:web

# Testar localmente
npm run serve

# Ou usar o script completo
npm run preview
```

### Verificar build:
```bash
# Verificar se os arquivos foram gerados
ls -la dist/

# Verificar se o index.html existe
cat dist/index.html
```

## 🔍 Troubleshooting

### Build falha:
1. Verifique se todas as dependências estão instaladas
2. Execute `npm ci` para instalar dependências limpas
3. Verifique logs do GitHub Actions

### Site não atualiza:
1. Aguarde alguns minutos (GitHub Pages pode demorar)
2. Verifique se o deploy foi bem-sucedido nas Actions
3. Force refresh no navegador (Ctrl+F5)

### Erro 404:
1. Verifique se o arquivo `CNAME` está presente
2. Confirme se o GitHub Pages está configurado corretamente
3. Verifique se a branch `gh-pages` foi criada

## 📁 Estrutura de Deploy

```
dist/                    # Arquivos de build
├── index.html          # Página inicial
├── _expo/              # Assets do Expo
├── assets/             # Imagens e ícones
├── projects/           # Página de projetos
├── repositories/       # Página de repositórios
├── llms/               # Página de LLMs
├── .nojekyll           # Arquivo para GitHub Pages
└── CNAME               # Configuração de domínio
```

## 🔄 Atualizações

Para atualizar o site:
1. Faça suas alterações no código
2. Commit e push para `main`:
   ```bash
   git add .
   git commit -m "Atualização do portfolio"
   git push origin main
   ```
3. O deploy acontecerá automaticamente
4. Aguarde alguns minutos para a atualização aparecer

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do GitHub Actions
2. Teste o build localmente primeiro
3. Consulte a documentação do Expo Router
4. Abra uma issue no repositório 