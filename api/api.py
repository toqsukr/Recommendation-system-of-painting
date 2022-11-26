from flask import Flask, request
from flask_restful import Api, Resource, reqparse
import socket
# from flask_ngrok import run_with_ngrok


app = Flask(__name__)
# run_with_ngrok(app)
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

ai_collection = [
  {
    "id": 18,
    "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    "url": "https://via.placeholder.com/600/1fe46f",
    "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
  },
  {
    "id": 19,
    "title": "perferendis nesciunt eveniet et optio a",
    "url": "https://via.placeholder.com/600/56acb2",
    "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
  }
]

@app.route('/api/collection', methods=['GET', 'POST'])
def collection():
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(('localhost', 3434))
    if request.method == 'POST':
        request_data = request.get_json()
        client.send((str(request_data) + "POST").encode('utf-8'))
        mess = client.recv(1024).decode('utf-8')
        return mess
    else:
        client.send(("POST").encode('utf-8'))
        data = eval(client.recv(1024).decode('utf-8'))
        return data

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
    app.run()