from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if data['username'] == 'admin' and data['password'] == 'admin':
        return jsonify({'success': True})
    return jsonify({'success': False})

@app.route('/upload-face', methods=['POST'])
def upload_face():
    file = request.files.get('file')
    if file:
        file.save(f'uploads/{file.filename}')
        return jsonify({'message': 'File uploaded successfully'})
    return jsonify({'message': 'No file uploaded'}), 400

if __name__ == '__main__':
    app.run(debug=True)

