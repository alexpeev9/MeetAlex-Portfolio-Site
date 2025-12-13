---
description: "TypeScript patterns and type safety requirements"
globs: ["src/**/*.ts", "src/**/*.tsx"]
alwaysApply: false
---

# TypeScript Rule

## Core Principles

1. **Strict typing**: Use TypeScript's strict mode
2. **Explicit types**: Define types for all props, functions, and complex data
3. **Type inference**: Use inference for simple cases, explicit types for complex ones
4. **No `any`**: Avoid `any` type; use `unknown` if type is truly unknown

## Type Definition Patterns

1. **Component Props**:
   ```typescript
   type ComponentProps = {
     sectionId?: string;
     className?: string;
     requiredProp: string;
   };
   ```

2. **Variant Types** (for UI components):
   ```typescript
   type TextVariant = "heading1" | "heading2" | "heading3" | "body";
   type ButtonVariant = "primary" | "secondary" | "outline";
   ```

3. **Record Types** (for mapping objects):
   ```typescript
   const variantMap: Record<TextVariant, string> = {
     heading1: "text-2xl font-semibold",
     heading2: "text-xl font-semibold",
     // ...
   };
   ```

4. **Function Types**:
   ```typescript
   const getVariantStyles = (variant: TextVariant): string => {
     return variantMap[variant];
   };
   ```

## React Component Patterns

1. **Function Components**:
   ```typescript
   const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
     // ...
   };
   ```

2. **Default Props**:
   ```typescript
   const Component = ({
     variant = "default",
     size = "md",
   }: ComponentProps) => {
     // ...
   };
   ```

3. **Destructuring with defaults**:
   ```typescript
   const { className = "" } = props;
   ```

## Type Safety Best Practices

1. **Always type function parameters and return types**
2. **Use type guards** when checking types at runtime
3. **Leverage TypeScript's type inference** for simple cases
4. **Use `as const`** for literal types when needed
5. **Use `Readonly<>`** for immutable data structures

## Import Types

```typescript
import type { ComponentType } from "react";
import type { Metadata } from "next";
```

## Avoid

- ❌ `any` type
- ❌ `@ts-ignore` or `@ts-expect-error` without explanation
- ❌ Unnecessary type assertions (`as`)
- ❌ Mixing `interface` and `type` inconsistently (prefer `type`)

## Examples

✅ **Correct**:
```typescript
type Role = {
  title: string;
  company: string;
  period: string;
  highlights: string[];
};

const ExperienceRole = ({ role }: { role: Role }) => {
  // ...
};
```

❌ **Wrong**:
```typescript
const ExperienceRole = ({ role }: { role: any }) => {
  // ...
};
```

