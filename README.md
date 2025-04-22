# WiFi Billing System

## Overview
This is gonna be the biggest WiFi billing system ever! We’re starting with Kenya, but this baby will go global. It’s got everything—sleek UI, dense backend, and a massive database. Let’s make it happen! – Me

## Features
### User Features
- **Dashboard**: Show data usage, package details, and notifications (like in GalaxyRAD image 1).
- **Package Management**: View and renew packages (e.g., 15Mbps plan, expires 10-06-2024).
- **Payment Integration**: Pay via M-Pesa (Kenya focus) with QR code support.
- **Usage Graphs**: Visualize data usage with Mermaid.js graphs (Used vs Limit).

### Admin Features
- **User Management**: List users with filters (active, expired) and actions (edit, delete) (like in image 2).
- **Financial Summaries**: Revenue, expenses, and bill collection stats (like in ClerkEx image 3).
- **Activity Logs**: Track logins and system events (e.g., “Sayeed successfully login”).
- **Graphs**: Revenue trends, user activity, and package usage (inspired by image 5).

### Reseller Features
- **Reseller Dashboard**: Manage customers, track sales, and view commissions (inspired by image 1).
- **Voucher Stock**: Manage unused/used vouchers (like in image 3).

### Global Scalability
- Multi-currency support (starting with Ksh for Kenya).
- Multi-language support for global expansion.
- Scalable database (SQLite3 for now, but designed to switch to PostgreSQL later).

## Tech Stack
- **Frontend**: ReactJS + Bootstrap + Mermaid.js (for graphs)
- **Backend**: Django + Celery + Redis + Djoser
- **Database**: SQLite3 (initially)
- **API Docs**: Swagger (drf-yasg)
- **Schema Design**: dbiagram.io

## Phase 1 Goals
- Set up the project environment.
- Define features and requirements.
- Design the database schema with dbiagram.io.
- Create wireframes for the UI/UX.

## Next Steps
- Move to Phase 2: Backend development with Django APIs.
- Start coding the React frontend in Phase 3.