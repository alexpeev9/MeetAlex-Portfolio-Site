---
description: "Component structure and organization patterns"
globs: ["src/components/**/*.tsx"]
alwaysApply: false
---

# Component Structure Rule

## File Organization

- **UI components**: `src/components/ui/` - Reusable, generic components
- **Feature components**: `src/components/{feature}/` - Feature-specific components
- **Layout components**: `src/components/layout/` - Header, Footer, etc.
- **Exports**: Use `index.ts` in `ui/` folder for clean imports

## Component Structure Pattern

1. **Imports** (in order):
   - React/Next.js imports
   - Type imports
   - Local component imports
   - Utility functions (`getCopy`)

2. **Type definitions**:
   - Define types/interfaces at the top
   - Use descriptive names with `Props` suffix

3. **Component function**:
   - Use `const ComponentName = () => {}` pattern
   - Extract copy data at the top: `const copy = getCopy();`
   - Build className arrays for dynamic styling

4. **Return JSX**:
   - Use semantic HTML elements (`<section>`, `<article>`, `<nav>`)
   - Include proper accessibility attributes

## Example Structure

```typescript
import { getCopy } from "@/lib/getCopy";
import Text from "../ui/Text";

type ComponentProps = {
  sectionId?: string;
  className?: string;
};

const Component = ({ sectionId, className }: ComponentProps) => {
  const sectionClassName = [
    "mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 sm:pt-24 xl:px-0",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copy = getCopy();
  const data = copy.cv.section;

  return (
    <section id={sectionId} className={sectionClassName}>
      {/* Component content */}
    </section>
  );
};

export default Component;
```

## Naming Conventions

- **Components**: PascalCase (`ExperienceRole`, `HeroSection`)
- **Files**: Match component name (`ExperienceRole.tsx`)
- **Props**: Descriptive with `Props` suffix (`ExperienceRoleProps`)
- **Types**: PascalCase (`Role`, `ButtonVariant`)

## Props Pattern

- Always include `className?: string` for flexibility
- Include `sectionId?: string` for anchor links
- Use optional props with defaults when appropriate

## Export Pattern

- Use default exports: `export default ComponentName;`
- Re-export from `index.ts` for UI components

