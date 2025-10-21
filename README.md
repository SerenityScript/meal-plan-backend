# Meal Planner – Backend (Node.js + Express + MongoDB)

Dieses Backend stellt eine einfache REST-API für eine **Meal-Plan**-App bereit.  
Es erlaubt das **Anlegen**, **Auslesen**, **Bearbeiten** und **Löschen** von Mahlzeiten (Meals) in MongoDB.

## 📋 Features

- CRUD-API für Mahlzeiten:
  - `GET /` – alle Meals abrufen
  - `POST /saveMeals` – neues Meal anlegen
  - `PUT /editMeal` – Meal-Titel bearbeiten
  - `POST /deleteMeal` – Meal löschen
- Persistenz mit **MongoDB** (Mongoose)
- **CORS** aktiviert (für Frontend-Zugriff)
- JSON-Body-Parsing via `express.json()`

## 🛠️ Technologien

- **Node.js** + **Express**
- **MongoDB** mit **Mongoose**
- **dotenv** für Umgebungsvariablen
- **CORS** Middleware

## ✨ Mitwirkende Yulia Siebrandt - Projektentwicklung 

## 📧 Kontakt Wenn du Fragen oder Vorschläge hast, melde dich gerne bei mir über [siebrandt.dev@gmail.com](mailto:siebrandt.dev@gmail.com)