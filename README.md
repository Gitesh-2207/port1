# MERN Portfolio Starter

A responsive portfolio starter inspired by the supplied screenshots. Frontend: React + Vite + Tailwind CSS v3. Backend: Express + MongoDB (Mongoose).

## Requirements
- Node.js 18+
- MongoDB local instance or MongoDB Atlas connection string

## 1. Frontend
```bash
cd client
npm install
npm run dev
```
Open the Vite URL shown in your terminal.

## 2. Backend
In another terminal:
```bash
cd server
cp .env.example .env
```
Set `MONGO_URI` in `server/.env`, then:
```bash
npm install
npm run dev
```
API runs on `http://localhost:5000`.

## Personalize
- Change the name and content in `client/src/App.jsx`.
- Replace the avatar placeholder with your photo in `client/public/avatar.png`.
- Add your resume at `client/public/resume.pdf`.
- Update project URLs and social links.
- Set `VITE_API_URL=http://localhost:5000` in `client/.env` if your API uses another URL.

The homepage works without the backend. The backend is used by the contact form.
