# Wireframes for WiFi Billing System

## User Dashboard (Inspired by GalaxyRAD Image 1)

- **Header**: Logo on the left, user profile on the right.
- **Sidebar**: Navigation with Dashboard, Packages, Orders, Tickets, Reports.
- **Main Section**:
  - **My Device Card**: Username, MAC, status (Active/Offline), package details (15Mbps, expiry date), and a "Renew" button.
  - **Notifications Card**: List of recent notifications (e.g., “You have successfully logged in at…”).
  - **Data Usage Card**: Graph (Used vs Limit) using Mermaid.js, showing 0.00 MB used out of 0 MB limit.

## Admin Dashboard (Inspired by ClerkEx Image 3)

- **Header**: System name, admin profile.
- **Sidebar**: Dashboard, Users, Finance, Reports, Internet Plans.
- **Main Section**:
  - **Summary Cards**: Bill collected (Ksh 120,170), revenue (Ksh 266,897), users active (64), etc., with “View Reports” links.
  - **Graphs**: Revenue trends, user activity (active/expired), package usage.
  - **Activity Log**: List of recent events (e.g., “Sayeed successfully login…”).

## Reseller Dashboard (Inspired by GalaxyRAD Image 1)

- **Header**: Same as user dashboard.
- **Sidebar**: Dashboard, Customers, Vouchers, Reports.
- **Main Section**:
  - **Customer Summary**: Total, active, expired users.
  - **Voucher Stock**: Table of unused/used vouchers.
  - **Sales Graph**: Revenue and sales trends using Mermaid.js.

## Notes

- All dashboards will use a dark theme with blue accents (like the images).
- Graphs will be interactive, using Mermaid.js for visualization.
- Focus on Kenya: Display currency in Ksh, include M-Pesa payment options.