# Security Guide

## Practices
- **Content Security Policy (CSP)** is enforced at the reverse proxy (Nginx).
- **Authentication** relies on Firebase Auth with Google OAuth or secure Guest Fallback.
- **Role-based Access Control (RBAC)** restricts access to the Admin Console.
- **Dependencies** are audited regularly in the CI pipeline.
