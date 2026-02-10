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
