# Triiiple Vienna Website Redesign
The Triiiple Vienna Website Redesign is a full-stack web application built as my bachelor thesis project, using React and Django. This was my first full-stack project, where I explored environment setup, React, and connecting a frontend with a Django backend. The project focuses on modernizing the website design and adding dynamic features such as project filtering and search functionality.

- Frontend: React, CSS
- Backend: Django, Django REST API
- Purpose: redesign of the Triiiple Vienna website for a bachelor thesis
- Status: completed (first full-stack project)

## Screenshots
Homepage
![]()
![]()

Projects (Frontend and backend)

Gallery (Frontend and backend)
![]()


## Features
- Full-stack website redesign with React and Django
- Dynamic project rendering from backend data
- Reusable React components
- Modern and minimalistic UI
- Project search and filter functionality
- Django-powered backend for managing project content
- API communication between frontend and backend
- Image upload
- Admin panel

## Tech Stack
Frontend
- React
- TypeScript
- CSS
- Axios
- React Router

Backend
- Django
- Django REST Framework
- SQLite

## Project Structure
```
triiiple-redesign/
├── backend/
│   ├── backend/
│   │   ├── apartments/
│   │   ├── api/
│   │   ├── backend/
│   │   ├── media/
│   │   ├── db.sqlite3
│   │   └── manage.py
│   └── env/
└── frontend/
    ├── node_modules/
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        └── pages/
```
## How to run locally

Frontend
```
cd frontend
npm install
npm run dev
```

Backend
```
cd backend
python -m venv venv
env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
# What I learned / Challenges
This was my first full-stack project, undertaken as part of my bachelor thesis. The main goal was to learn how to independently build a full-stack web application from scratch, connecting frontend and backend systems for the first time.

The biggest challenge was integrating all parts of the full-stack project together. I had to learn environment setup, React fundamentals, and how to structure components for dynamic data. Implementing the project search and filter functionality was particularly challenging, as it required careful handling of both frontend state and backend queries.

Through this project, I gained hands-on experience in full-stack development, environment management, connecting React with Django APIs, building reusable components, and implementing dynamic filtering features for projects.

## Future improvements
- Further refine responsive design
- Optimize filter and search performance
- Add animations and smoother transitions
- Deploy frontend and backend for live access

## Author
- Marijana Munćan
- [GitHub](https://github.com/marijanatrbl)
- [LinkedIn](https://www.linkedin.com/in/marijana-mun%C4%87an-2386371b7/)
