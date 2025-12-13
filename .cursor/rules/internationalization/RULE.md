---
description: "All text content must come from settings.json translation file"
alwaysApply: true
---

# Internationalization & Copy Management Rule

## Core Principle

**NEVER write text as plain strings in components.** All user-facing text must come from `src/translations/settings.json` via the `getCopy()` function.

## Implementation Guidelines

1. **Import and use `getCopy()`**:
   ```typescript
   import { getCopy } from "@/lib/getCopy";
   // or
   import { getCopy } from "../../lib/getCopy";
   
   const copy = getCopy();
   const text = copy.cv.experience.title;
   ```

2. **Add new text to `settings.json`**:
   - When adding new UI text, first add it to the appropriate section in `src/translations/settings.json`
   - Follow the existing nested structure (e.g., `cv.experience.showMore`)
   - Use descriptive keys that match the context

3. **Accessibility labels**:
   - Use `copy.cv.accessibility.*` for aria-label values
   - Or construct them from copy values (e.g., `${copy.navigation.ariaItemPrefix} ${item.label}`)

4. **Dynamic text interpolation**:
   - If you need to interpolate values, do it in the component, not in settings.json
   - Example: `{`${copy.navigation.ariaItemPrefix} ${item.label}`}`

## Examples

✅ **Correct**:
```typescript
const copy = getCopy();
<Text variant="heading2">{copy.cv.experience.title}</Text>
```

❌ **Wrong**:
```typescript
<Text variant="heading2">Experience</Text>
```

## When Adding New Features

1. Identify all text strings needed
2. Add them to `settings.json` in the appropriate section
3. Reference them via `getCopy()` in components
4. Never hardcode strings like "Show More", "Click here", etc.

