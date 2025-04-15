# System Architecture

```mermaid
graph TD
    A[ReactJS Frontend] -->|HTTP Requests| B[Django Backend]
    B -->|Database Operations| C[SQLite3 Database]
    B -->|Async Tasks| D[Celery]
    D -->|Task Queue| E[Redis]
    B -->|Email/SMS| F[Notification Service]
    B -->|API Docs| G[Swagger]
