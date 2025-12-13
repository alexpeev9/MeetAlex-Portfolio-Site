---
description: "Server components by default; avoid client-side JS unless explicitly requested"
alwaysApply: true
---

# Server Components Rule

## Core Principles

- **Default to Server Components**: do not add `"use client"` unless the user explicitly asks for client-side logic.
- **Prefer native HTML + CSS**: use `<details>/<summary>`, `:target`, `group-open:*`, transitions, and Tailwind utilities for interactivity.
- **Keep client components isolated**: if client logic is unavoidable and explicitly requested, keep it minimal and scoped (smallest surface area).

## Implementation Guidelines

When building interactive features:

1. **Attempt CSS-only first**
   - `<details>/<summary>` for toggle UI
   - Tailwind `group-open:*` for open state styling
   - `transition-*` + `max-h-*` + `opacity` for reveal/hide animations
2. **If the user asks for behavior that cannot be done without JS**
   - Explain the limitation clearly (e.g., programmatically closing `<details>` or timing-aware close animations).
   - Ask whether they want to allow a small `"use client"` helper; do not assume.
3. **If client code is explicitly approved**
   - Put it in the smallest possible component (e.g. a single button/handler), and keep the parent server-rendered.
   - Avoid global state, effects, and extra dependencies.

