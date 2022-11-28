from flask import Flask, request
import socket
import json
from flask_socketio import SocketIO
# from flask_ngrok import run_with_ngrok


app = Flask(__name__)
# run_with_ngrok(app)
socketio = SocketIO(app)
ai_decision = [
    {
        "id": 0,
        "grad": -1,
    }
]  

ai_image_pack = [
    {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://o9992407.beget.tech/img/img1.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "http://o9992407.beget.tech/img/img2.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    }
]

@app.route('/api/server', methods=['POST'])
def server_answer():
    return "server answer"


@app.route('/api/collection', methods=['GET', 'POST', 'DELETE'])
def collection():
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(('localhost', 3434))
    if request.method == 'POST':
        request_data = request.get_json()
        client.send((str(request_data) + "POST").encode('utf-8'))
        mess = client.recv(1024).decode('utf-8')
        return mess
    elif request.method == 'GET':
        client.send(("GET").encode('utf-8'))
        data = json.loads((client.recv(1024).decode('utf-8')))
        cltn = list(map(lambda el: eval("{" + f"'id':'{el[0]}', 'src':'{el[1]}', 'descript':'{el[2]}'" + "}"), data))
        return cltn
    elif request.method == 'DELETE':
        request_data = request.get_json()
        client.send((str(request_data) + "DELETE").encode('utf-8'))
        mess = client.recv(1024).decode('utf-8')
        return mess

@app.route('/api/decisions', methods=["GET", "PUT"])
def rate():    
    if request.method == 'PUT':
        id = request.json['id']
        grad = request.json['grad']
        elem = {
            'id': id,
            'grad': grad
        }
        ai_decision.pop()
        ai_decision.append(elem)
        return ai_decision

    return ai_decision

@app.route('/api/images', methods=['GET'])
def get_new():
    return ai_image_pack

if __name__ == '__main__':
    socketio.run(app)