# Project: team-blue

## Tech Stack
- TypeScript
- Node.js 20
- Jest for testing
- ESLint + Prettier for code quality

## Project Structure
```
src/           # Source code
src/__tests__/ # Test files
dist/          # Compiled output (gitignored)
coverage/      # Test coverage reports (gitignored)
```

## Commands
- `npm run build` - Compile TypeScript
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage

## Code Style
- Use strict TypeScript
- All functions should have explicit return types
- Prefer `const` over `let`
- No unused variables or parameters

## Testing
- Place tests in `src/__tests__/`
- Name test files `*.test.ts`
- Use descriptive test names
- Test edge cases and error scenarios
