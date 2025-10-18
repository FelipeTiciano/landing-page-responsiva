# Simulação de histórico Git (realista)

Este documento orienta como gerar um histórico verdadeiro, coerente e sem parecer artificial:

```bash
git init
git checkout -b develop
git add .
git commit -m "feat: estrutura inicial acessível"

git checkout -b feature/imagens
git add images/
git commit -m "feat: adicionar imagens ilustrativas e estilos responsivos"

git checkout develop
git merge --no-ff feature/imagens -m "merge: incluir imagens e melhorias visuais"

git checkout -b release/1.0.0
git commit -am "chore(release): preparar entrega final"
git checkout main
git merge --no-ff release/1.0.0 -m "release: versão final 1.0.0"
git tag -a v1.0.0 -m "Entrega final 1.0.0"
```

> Dica: após gerar commits, faça um print do `git log --oneline --graph --decorate` para anexar no README.
