# Security Policy

## Scope

This repository is a learning and prototype project for TypeScript, React, API integration, runtime validation, and AI workflows.

## Reporting

Do not publish secrets, exploit details, or sensitive data in a public issue. Report privately to the repository owner with the affected file, reproduction steps, impact, and suggested mitigation.

## Security Baseline

- Never commit `.env`, API keys, tokens, passwords, certificates, or private keys.
- Treat API, AI, URL, form, and storage data as untrusted.
- Validate external data at runtime; TypeScript types alone are not validation.
- Avoid unsafe HTML injection and review any use of `dangerouslySetInnerHTML`.
- Keep secrets on the server side and never expose privileged keys in frontend bundles.
- Apply least privilege to APIs, CI workflows, repositories, and cloud services.
- Use explicit timeouts, size limits, and error handling for network requests.
- Avoid logging credentials, personal data, prompts containing confidential content, or full provider responses with sensitive metadata.
- Review dependency and lockfile changes before merging.
- Document model, provider, privacy, retention, and cost assumptions for AI integrations.

## Recommended Checks

```bash
npm audit
npm run format:check
npm run check
npm run lint
npm test
npm run build
```

Educational and prototype code requires additional threat modeling, privacy review, monitoring, and environment-specific hardening before production deployment.
