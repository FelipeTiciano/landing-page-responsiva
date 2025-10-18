# Releases & Versionamento Semântico

Use SemVer: MAJOR.MINOR.PATCH (ex.: 1.0.0)

Exemplo de fluxo:
- Crie branch `release/1.0.0`
- Atualize `package.json` e `CHANGELOG.md`
- Abra PR para `main`
- Após merge, tag: `git tag -a v1.0.0 -m "Release v1.0.0"` e `git push --tags`
