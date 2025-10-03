# Instruções pra publicação do pacote no npm

```bash
pnpm clean && pnpm build
npm pack   # gera um .tgz; veja o conteúdo sem publicar
npm login
pnpm publish

```

## Testar a instalação

```bash
mkdir -p /tmp/test-nf && cd /tmp/test-nf
npm init -y
pnpm add @alijunior/nuvemfiscal-sdk-node
# ou, antes de publicar, teste o .tgz local:
# pnpm add /caminho/para/@alijunior-nuvemfiscal-sdk-node-1.0.0.tgz

# teste rápido num arquivo
printf '%s\n' "import { NuvemFiscalClient } from '@alijunior/nuvemfiscal-sdk-node';" > test.mts
node --eval "console.log('ok')"
```
