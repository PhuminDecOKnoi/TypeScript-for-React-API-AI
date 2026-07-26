# Dependency Update Policy

## Update scope

Review stable releases for TypeScript, React, React DOM, Vite, plugins, linting, formatting, testing, runtime validation, and type packages.

## Version rules

1. Use the npm `latest` stable tag for the documented baseline.
2. Do not use beta, canary, release-candidate, or experimental packages in the main branch unless clearly isolated.
3. Keep `react` and `react-dom` on the same version.
4. Record exact verified versions in `docs/version-matrix.md`.
5. Use compatible ranges in `package.json` and commit the generated lockfile after running `npm install` locally.

## Validation workflow

```bash
npm install
npm run format:check
npm run check
npm run lint
npm test
npm run build
```

## Documentation control

Every dependency baseline update must also update:

- `README.md`
- `CHANGELOG.md`
- `REFERENCE.md`
- `docs/version-matrix.md`

## Security and maintenance

Review dependency advisories, remove deprecated packages, and prefer fewer direct dependencies where platform APIs are sufficient.
