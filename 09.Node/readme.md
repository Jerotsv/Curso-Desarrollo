---
title: Course Node.js
description: 'Información sobre Node.js para el certificado de profesionalidad de Desarrollo de Aplicaciones con Tecnologías Web'
dates: 04/2025
---

- [Preparación del Entorno de Desarrollo](#preparación-del-entorno-de-desarrollo)
- [Creación de un proyecto con Node.js, TS, ESLint y Prettier \& Vitest (como herramienta de testing)](#creación-de-un-proyecto-con-nodejs-ts-eslint-y-prettier--vitest-como-herramienta-de-testing)
  - [Primera demo en Node.js](#primera-demo-en-nodejs)

## Preparación del Entorno de Desarrollo

- Git <https://git-scm.com/> y una cuenta en un hosting de repositorios (GitHub) <https://github.com/>
- Editor de código: Visual Studio Code <https://code.visualstudio.com/>
- Terminal (Linea de commandos)
- Administrador de versiones de Node.js: NVM <https://github.com/coreybutler/nvm-windows>
- Node.js y el gestor de paquetes npm <https://nodejs.org/es/>

Instalación de Node.js y npm, después de instalar NVM:

```bash
nvm install 23.6.0
nvm install latest
nvm list
nvm use 23
```

- Nodemon <https://nodemon.io/>: `npm install -g nodemon`
- Alternativa actual `node -w`

## Creación de un proyecto con Node.js, TS, ESLint y Prettier & Vitest (como herramienta de testing)

- Creación de un proyecto con Node.js: `npm init -y`
- Instalación de TypeScript <https://www.typescriptlang.org/>: `npm install -D typescript`
- Instalación de Prettier <https://prettier.io/>: `npm install -D prettier`
- Configuración de Prettier en package.json
- Instalación de ESLint <https://eslint.org/>: `npm init @eslint/config@latest`
- Configuración de TypeScript: `npx tsc --init`
- Ajustes de la configuración de TypeScript en `tsconfig.json`
- Instalación de Vitest <https://vitest.io/>: `npm install -D vitest`
- Configuración de Vitest en `vitest.config.js` y `tsconfig.json`
- Incorporación de scripts en `package.json`

### Primera demo en Node.js

```typescript
console.log('Hello World');
```
