---
description: "Styling conventions using Tailwind CSS and CSS variables"
alwaysApply: true
---

# Styling & Design System Rule

## Core Principles

1. **Use Tailwind CSS utilities** for all styling
2. **Use CSS variables** defined in `globals.css` for colors, spacing, and design tokens
3. **Use Tailwind's CSS variable syntax** with parentheses: `text-(--text-primary)`
4. **Never use inline styles** except for dynamic values (like `backgroundImage`)

## CSS Variables Pattern

All design tokens are defined in `src/app/globals.css` as CSS variables. Use them with Tailwind's custom syntax:

- Colors: `text-(--text-primary)`, `bg-(--surface-card)`, `border-(--accent-primary)`
- Spacing/shadows: `[box-shadow:var(--surface-card-shadow)]`
- Gradients: `style={{ background: "var(--gradient-page)" }}`

## Component Styling Patterns

1. **ClassName arrays**:
   ```typescript
   const sectionClassName = [
     "mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-24 xl:px-0",
     className,
   ]
     .filter(Boolean)
     .join(" ");
   ```

2. **Responsive design**:
   - Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
   - Mobile-first approach (base styles, then breakpoints)

3. **Card styling pattern**:
   ```typescript
   className="rounded-[1.75rem] border border-(--surface-card-border) bg-(--surface-card) px-4 py-8 [box-shadow:var(--surface-card-shadow)] [backdrop-filter:blur(18px)]"
   ```

4. **Transitions and animations**:
   - Use Tailwind transition classes: `transition-all duration-300 ease-out`
   - Hover effects: `hover:-translate-y-0.5 hover:bg-(--accent-primary-hover)`

## Focus States

Always include focus-visible styles for accessibility:
```typescript
className="focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none"
```

## Common Patterns

- **Max width containers**: `max-w-6xl` for main content
- **Section spacing**: `pt-12 sm:pt-24` for vertical rhythm
- **Grid layouts**: `grid gap-6 md:grid-cols-2` for responsive grids
- **Rounded corners**: `rounded-xl` or `rounded-[1.75rem]` for cards

## Do Not

- ❌ Use inline styles for static values
- ❌ Hardcode colors (use CSS variables)
- ❌ Create custom CSS classes when Tailwind utilities exist
- ❌ Mix CSS modules with Tailwind

