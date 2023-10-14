from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Initialize a simple local database (replace with a real database)
user_database = []

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Validate unique email (replace with your validation logic)
    for user in user_database:
        if user['email'] == email:
            return jsonify({'success': False, 'message': 'Email already exists'})

    user = {
        'username': username,
        'email': email,
        'password': password
    }
    user_database.append(user)

    # Save user data to the JSON file
    with open('user_data.json', 'w') as json_file:
        json.dump(user_database, json_file, indent=4)

    return jsonify({'success': True, 'message': 'Signup successful'})

# Route for serving the HTML file
@app.route('/signup.html')
def serve_signup():
    return app.send_static_file('signup.html')

@app.route('/user_data')
def serve_user_data():
    # Load user data from the JSON file
    with open('user_data.json', 'r') as json_file:
        user_data = json.load(json_file)
    return jsonify({'users': user_data})

if __name__ == '__main__':
    app.run(debug=True)
