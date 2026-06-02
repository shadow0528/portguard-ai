# PortGuard AI - Enterprise Architecture

PortGuard AI follows a microservices-inspired architecture designed to bridge web technologies (React/Node) with deep network automation (Python/Netmiko).

## High-Level Components

1.  **Frontend (React SPA)**
    *   Located in `frontend/`.
    *   Provides the Enterprise SOC dashboard, captive portal, and device approval queues.
    *   Uses `tailwindcss` for styling and `recharts` for visual data.
    *   Communicates entirely over REST via Axios.

2.  **Backend (Node.js / Express)**
    *   Located in `backend/`.
    *   Handles Authentication (JWT), Authorization (RBAC), and session management.
    *   Interfaces directly with PostgreSQL via Prisma ORM (v5).
    *   Exposes endpoints for `/auth`, `/devices`, `/policies`, `/audit`, `/compliance`, and `/switches`.
    *   Acts as the central orchestrator, passing network commands to the Network Engine.

3.  **Network Engine (Python Flask)**
    *   Located in `network-engine/`.
    *   Responsible for executing raw commands against physical or virtual network infrastructure.
    *   Uses `netmiko` and `paramiko` to abstract Cisco, Aruba, and MikroTik switch syntax.
    *   Includes a Device Discovery module (`scapy`/`arp-scan` wrappers) to find new devices on connected subnets.
    *   Exposes a small, internal Flask API for the Node.js backend to trigger (`/api/switch/vlan-assign`, `/api/discover`).

4.  **Database (PostgreSQL)**
    *   Maintains the state of the NAC platform.
    *   Key models include `Device`, `User`, `VlanAssignment`, `AuditLog`, `RiskScore`, and `Policy`.

## Flow: Device Onboarding

1.  Unknown MAC connects to a switch.
2.  Switch is configured to drop unknown MACs into a default Registration VLAN (e.g., VLAN 100).
3.  Network Engine discovers the IP/MAC and alerts the Backend.
4.  Device attempts to access the web and is intercepted by the Captive Portal.
5.  User registers/authenticates via Frontend Captive Portal.
6.  Backend evaluates risk via the Risk Engine and evaluates Policies.
7.  If approved, Backend sends a `/vlan-assign` command to the Network Engine.
8.  Network Engine SSHs into the switch and moves the port from VLAN 100 to the Production VLAN (e.g., VLAN 10).
9.  Audit Log is generated.

## Infrastructure
All components are containerized and orchestrated via `docker-compose.yml`. Network isolation ensures the backend and network engine communicate securely.
