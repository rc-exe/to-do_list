# Flask To-Do List App

A simple To-Do List web application built using Flask, SQLite, and HTML/CSS.

## Features
- Add tasks with a due date
- Delete tasks
- Displays tasks in order of due date
- Responsive UI with a background image and animations
- Footer with copyright and contact details

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/rage-exe/flask-todo-app.git
cd flask-todo-app
```

### 2. Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # For macOS/Linux
venv\Scripts\activate  # For Windows
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Application
```bash
python app.py
```
The app will be accessible at `http://127.0.0.1:5000/`.

## File Structure
```
flask-todo-app/
│── templates/
│   ├── index.html  # Frontend UI
│── static/
│   ├── styles.css  # Stylesheet (if any)
│── app.py  # Main Flask application
│── requirements.txt  # List of dependencies
│── README.md  # Project documentation
```

## Database Setup
If running for the first time, initialize the database:
```python
from app import db, app
with app.app_context():
    db.create_all()
```

## Deployment
You can deploy this Flask app using **Heroku**, **Render**, or **PythonAnywhere**.

### Example Deployment on Heroku
```bash
git init
git add .
git commit -m "Initial commit"
heroku create flask-todo-app
heroku config:set FLASK_APP=app.py
heroku config:set FLASK_ENV=production
git push heroku main
heroku open
```

## Contact
For any queries, contact **Ritesh Chakramani** at [riteshchakramani123@gmail.com](mailto:riteshchakramani123@gmail.com).

## License
© 2025 Ritesh Chakramani. All rights reserved.

