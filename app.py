
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

tasks = []  # Temporary in-memory list (use a database for persistence)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    new_task = {"id": len(tasks) + 1, "title": data['title']}
    tasks.append(new_task)
    return jsonify(new_task), 201

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task["id"] != task_id]
    return jsonify({"message": "Task deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
