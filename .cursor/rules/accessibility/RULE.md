---
description: "Accessibility requirements for all interactive elements"
alwaysApply: true
---

# Accessibility Rule

## Core Principle

**All interactive elements must be keyboard accessible and screen reader friendly.**

## Required Accessibility Attributes

1. **Links and buttons**:
   ```typescript
   <a
     href={url}
     aria-label={descriptiveLabel}
     className="focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none"
   >
   ```

2. **External links**:
   ```typescript
   <a
     href={url}
     target="_blank"
     rel="noopener noreferrer"
     aria-label={label}
   >
   ```

3. **Images**:
   ```typescript
   <Image
     src={src}
     alt={descriptiveAltText}
     width={width}
     height={height}
   />
   ```

4. **Decorative images**:
   ```typescript
   <div
     role="img"
     aria-label={descriptiveLabel}
     style={{ backgroundImage: `url(${src})` }}
   />
   ```

5. **Navigation**:
   ```typescript
   <nav aria-label={copy.navigation.ariaMenu}>
     {items.map((item) => (
       <a
         aria-label={`${copy.navigation.ariaItemPrefix} ${item.label}`}
         href={`#${item.id}`}
       >
   ```

## Focus Management

- **Always include focus-visible styles**:
  ```typescript
  className="focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none"
  ```

- **Hover effects should not replace focus styles**
- **Ensure focus indicators are visible** (use CSS variables from design system)

## Semantic HTML

- Use semantic elements: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- Use proper heading hierarchy (`h1` → `h2` → `h3`)
- Use `<button>` for actions, `<a>` for navigation

## ARIA Labels

- Get labels from `copy.cv.accessibility.*` when available
- Construct descriptive labels: `${action}: ${item.name}`
- Use `aria-hidden="true"` for decorative elements only

## Keyboard Navigation

- All interactive elements must be keyboard accessible
- Use `tabindex="0"` only when necessary (native elements don't need it)
- Never use `tabindex="-1"` to remove from tab order unless absolutely necessary

## Examples

✅ **Correct**:
```typescript
<Button
  href={url}
  ariaLabel={`${copy.cv.accessibility.projectLink}: ${project.name}`}
  buttonType="primary"
>
  {copy.cv.projects.items[0].viewLinkLabel}
</Button>
```

❌ **Wrong**:
```typescript
<a href={url}>View Project</a> // Missing aria-label and focus styles
```

