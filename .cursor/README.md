# Cursor Project Rules

This directory contains project-specific rules for Cursor AI to follow when working on this codebase.

## Available Rules

### Always Applied Rules

These rules are automatically applied to every chat session:

1. **server-components** - Server components by default; avoid client-side JS unless explicitly requested
2. **internationalization** - All text content must come from settings.json translation file
3. **styling** - Styling conventions using Tailwind CSS and CSS variables
4. **accessibility** - Accessibility requirements for all interactive elements
5. **dependencies** - Dependency management and installation restrictions

### Context-Specific Rules

These rules are applied when working with specific file patterns:

1. **component-structure** - Component structure and organization patterns (applies to `src/components/**/*.tsx`)
2. **typescript** - TypeScript patterns and type safety requirements (applies to `src/**/*.ts`, `src/**/*.tsx`)

## Rule Structure

Each rule is a folder containing a `RULE.md` file with:
- Frontmatter metadata (`description`, `alwaysApply`, `globs`)
- Detailed guidelines and examples
- Do's and don'ts

## How Rules Work

- Rules with `alwaysApply: true` are included in every chat session
- Rules with `globs` patterns are applied when working with matching files
- Rules can be manually invoked by mentioning them in chat (e.g., `@server-components`)

## MCP Servers

MCP (Model Context Protocol) servers are configured in Cursor's settings, not in this project directory. To configure MCP servers:

1. Open Cursor Settings
2. Navigate to "Features" → "MCP Servers"
3. Add or configure MCP servers as needed

Common MCP servers that might be useful for this project:
- Browser automation (for testing)
- File system operations
- Git operations
- Database access (if needed)

## Adding New Rules

To add a new rule:

1. Create a new folder in `.cursor/rules/`
2. Add a `RULE.md` file with frontmatter and content
3. Set `alwaysApply: true` for rules that should always be active
4. Use `globs` array for file-pattern-specific rules

