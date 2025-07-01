#!/bin/bash

echo "🚀 Iniciando deploy do portfolio..."

# Limpar builds anteriores
echo "🧹 Limpando builds anteriores..."
rm -rf dist/
rm -rf out/

# Instalar dependências
echo "📦 Instalando dependências..."
npm ci

# Build do projeto
echo "�� Gerando build..."
npx expo export --platform web

# Criar arquivo .nojekyll
echo "📝 Criando arquivo .nojekyll..."
touch dist/.nojekyll

# Copiar CNAME
echo "🌐 Configurando domínio..."
cp CNAME dist/

echo "✅ Build concluído! Arquivos gerados em ./dist/"
echo "📁 Para testar localmente: npx serve dist"
echo "🚀 Para fazer deploy: git add . && git commit -m 'Deploy' && git push" 