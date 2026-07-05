# Deployment Guide

## Docker
Aura X can be deployed using Docker.

```bash
docker-compose up -d --build
```

## Nginx
The provided `nginx.conf` includes strict security headers and caching strategies for production performance.

## CI/CD
GitHub Actions (`.github/workflows/ci.yml`) automatically lints and builds the project on push and PR to main/develop branches.
