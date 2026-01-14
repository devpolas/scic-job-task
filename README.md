# Next Tour

A modern **Next.js 16** application built as part of a job task.  
This project demonstrates authentication using **JWT**, API routes, server/client component separation, and a clean UI powered by **Tailwind CSS**.

---

## 🚀 Tech Stack

- **Next.js 16 (App Router + Turbopack)**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **JWT Authentication**
- **bcrypt** (password hashing)

---

## 📂 Project Structure

```
src/
├── app/
│ ├── api/ # API routes (login, logout, me)
│ ├── layout.tsx # Root layout
│ └── page.tsx # Home page
├── lib/ # Server-side helpers
├── store/ # Client-side auth logic
├── types/ # TypeScript types
└── components/ # Reusable UI components

```

---

## 🔐 Authentication Flow

```
- Login using email & password
- JWT is generated on the server
- Token is stored in an **HTTP-only cookie**
- User session is validated via `/api/me`
- Logout clears the cookie securely

```

---

## 🧪 API Endpoints

```
| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| POST   | `/api/login`  | Login user            |
| POST   | `/api/logout` | Logout user           |
| GET    | `/api/me`     | Get current user info |

```

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```env
JWT_SECRET=your_jwt_secret
WEBSITE_URL = http://localhost:3000
NEXT_PUBLIC_WEBSITE_URL= http://localhost:3000

```

## 🧑‍💻 Installation & Setup

```
bash
Copy code
# Install dependencies
npm install

# Run development server
npm run dev
App will be available at:

Copy code
http://localhost:3000

```

## 📦 Scripts

```
bash
Copy code
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Run production build
npm run lint    # Run ESLint

```

## ✨ Features

```
Secure JWT-based authentication

Server & Client component separation

Protected routes logic

Clean, responsive UI

Modern Next.js best practices

```

## 📌 Notes

```
Cookies are handled securely on the server

Client never accesses JWT directly

Uses credentials: "include" for auth requests

```

## 📄 License

```
This project is created for evaluation purposes only.

```
