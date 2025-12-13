---
description: "Dependency management and installation restrictions"
alwaysApply: true
---

# Dependencies & Commands Rule

## Core Principle

**NEVER install dependencies or run terminal commands unless explicitly requested by the user.**

## Restrictions

1. **Do NOT install packages**:
   - Do not run `npm install`, `pnpm add`, `yarn add`, etc.
   - Do not add dependencies to `package.json`
   - Do not suggest new packages unless user explicitly asks

2. **Do NOT run build/dev commands**:
   - Do not run `npm run dev`, `pnpm dev`, `next dev`, etc.
   - Do not run build commands unless explicitly requested
   - Do not run linting/formatting commands

3. **Do NOT modify configuration files**:
   - Do not modify `package.json`, `tsconfig.json`, `next.config.ts` without explicit request
   - Do not create new config files unless requested

## What You CAN Do

- ✅ Read and analyze existing code
- ✅ Suggest code changes and improvements
- ✅ Create new component files
- ✅ Modify existing component files
- ✅ Update translation files (`settings.json`)
- ✅ Update CSS files

## When User Requests Installation

If the user explicitly asks to install a package:
1. Confirm the package name and version
2. Explain what it will be used for
3. Then proceed with installation

## Project Dependencies

Current project uses:
- **Next.js 16.0.7** (React 19.2.0)
- **Tailwind CSS v4**
- **TypeScript 5**
- **pnpm** as package manager

Do not suggest or add dependencies that conflict with these versions.

