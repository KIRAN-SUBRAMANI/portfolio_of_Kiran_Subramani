🚀 Kiran Subramani — Full-Stack Developer Portfolio

A modern AI-ready full-stack developer portfolio built with Next.js App Router, showcasing projects, experience, skills, and a fully functional contact system.

This portfolio is designed to be production-ready, scalable, and deployable on Vercel.

🌐 Live Portfolio
https://portfolio-of-kiran-subramani.vercel.app

✨ Features
👤 Portfolio Sections
The website includes the following sections:
Hero Section
About Me
Experience
Skills
Projects
Education
Contact

📬 Contact Form (Full-Stack)
The contact form is fully functional and connected to a backend API.

Features:
Sends messages directly to email
Server-side validation
Rate limiting protection
API based architecture
Production-ready backend
When someone submits the form, the message is sent directly to: kiransubramani0708@gmail.com

⚡ Full-Stack Architecture
This portfolio is not a static website.
It uses Next.js server APIs for backend functionality.

Example API routes:
POST /api/contact
GET  /api/data

These APIs handle:
Contact form submissions
Portfolio data fetching
Backend validation

🔐 Security
Security best practices implemented:
Server-side validation using Zod
Rate limiting to prevent spam
Environment variables for secrets
API routes instead of exposing credentials

🧠 Tech Stack
Frontend
Next.js (App Router)
React
TailwindCSS
React Icons
Responsive UI
Backend
Next.js API Routes
Node.js
Nodemailer
Deployment
Vercel
Dev Tools
Git
GitHub
VS Code

📁 Project Structure
app
 ├── api
 │    ├── contact
 │    │     └── route.js
 │    └── data
 │          └── route.js
 │
 ├── layout.jsx
 ├── page.jsx
 └── globals.css

components
 ├── Navbar.jsx
 ├── Footer.jsx
 ├── Contact.jsx
 └── Container.jsx

data
 └── portfolio.json

lib
 ├── mailer
 │    └── nodemailer.js
 │
 ├── validators
 │    └── contact.js
 │
 └── rate-limit
      └── basic.js

hooks
 └── timeAgo.js

 📬 Contact API
Endpoint
POST /api/contact
Request Example
{
  "name": "Kiran",
  "email": "example@gmail.com",
  "message": "Hello! I liked your portfolio."
}
Response

Success

{
  "success": true
}

Error

{
  "error": "Server error"
}

📧 Email Integration
Email sending is implemented using Nodemailer with Gmail SMTP.

Environment variables required:

EMAIL_ADDRESS
GMAIL_PASSKEY

These variables must be configured in Vercel Environment Variables.

🌍 Deployment
The portfolio is deployed on Vercel.
Deployment benefits:
Global CDN
Automatic deployments
Serverless API functions
Easy environment variable management

⚙️ Local Development
Clone repository
git clone https://github.com/KIRAN-SUBRAMANI/portfolio_new.git
Install dependencies
npm install
Start development server
npm run dev

Open:

http://localhost:3000
🔑 Environment Variables

Create a .env.local file in the root directory.

EMAIL_ADDRESS=your_email@gmail.com
GMAIL_PASSKEY=your_google_app_password
NEXT_PUBLIC_APP_URL=http://localhost:3000