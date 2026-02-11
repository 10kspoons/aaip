# AAIP - Claude Code Instructions

## 🚫 IMMUTABLE RULE: All Builds Must Use Docker

**ALL development builds and testing MUST be done inside Docker containers.** Never run builds natively on WSL/host.

- **Never** run `npm run build`, `npm install`, etc. directly on the host
- **Always** build using `docker build` to validate the Dockerfile works end-to-end
- **Always** run `docker build` as the final verification before committing
- This catches Dockerfile errors (missing files, wrong paths, platform issues) before they hit CI

**Why**: Native builds mask Docker build failures. If it doesn't build in Docker, it doesn't ship.

## Build Architecture

**Target platform**: Raspberry Pi 5 (ARM64) running K3s
**Runner**: `runs-on: [self-hosted, macOS, ARM64]` (Mac mini)
**Registry**: `registry2.palmtech.com.au/bc-aaip:latest`
**K8s namespace**: barleycorn

### K8s Ingress — ALWAYS Use Cloudflare Tunnel

**All public-facing services MUST use `ingressClassName: cloudflare-tunnel`** — NOT traefik, NOT nginx.

The cluster has `strrl.dev/cloudflare-tunnel-ingress-controller` installed. It automatically:
1. Creates DNS CNAME records in Cloudflare
2. Handles TLS at the edge (no cert-manager needed)
3. Routes traffic through CF tunnel to the cluster

Add annotation: `cloudflare-tunnel-ingress-controller.strrl.dev/backend-protocol: http`

**DO NOT** use traefik/nginx ingress, manually configure DNS, or use cert-manager for new services.
