
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="123456",  # your password
    database="CollegeManagement"
)
cursor = conn.cursor(dictionary=True)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    role = data['role']
    username = data['username']
    password = data['password']
    table = role.lower()

    cursor.execute(f"SELECT * FROM {table} WHERE username=%s AND password=%s", (username, password))
    user = cursor.fetchone()
    return jsonify(user if user else {"error": "Invalid credentials"})

@app.route('/attendance/<student_id>', methods=['GET'])
def get_attendance(student_id):
    cursor.execute("SELECT * FROM attendance WHERE student_id = %s", (student_id,))
    return jsonify(cursor.fetchall())

@app.route('/results/<student_id>', methods=['GET'])
def get_results(student_id):
    cursor.execute("SELECT * FROM results WHERE student_id = %s", (student_id,))
    return jsonify(cursor.fetchall())

if __name__ == '__main__':
    app.run(debug=True)
