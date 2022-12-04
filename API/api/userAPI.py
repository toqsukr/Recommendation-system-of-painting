class RepeateError(Exception):
    pass
    
class NotFound(Exception):
    pass

import uuid
from flask import Blueprint, request, jsonify
from firebase_admin import firestore
from flask_ngrok import run_with_ngrok

db = firestore.client()
user_Ref = db.collection('user')

userAPI = Blueprint('userAPI', __name__)

@userAPI.route('/collection', methods=['GET', 'POST', 'DELETE'])
def collection():
    if request.method == 'POST':
        try:
            all_images = [doc.to_dict() for doc in user_Ref.stream()]
            flag = False
            if(request.json["src"] in list(map(lambda el: el["src"], all_images))):    flag = True
            if(flag):   raise RepeateError("This picture has already exist!")
            id = uuid.uuid4()
            request.json.update({"hex": id.hex})
            user_Ref.document(id.hex).set(request.json)
            return jsonify({"success": True}), 200
        except RepeateError as e:
            return f"An Error Occured: {e}"
        except Exception as e:
            return f"An Error Occured: {e}"
    if request.method == 'GET':
        try:
            all_images = [doc.to_dict() for doc in user_Ref.stream()]
            return jsonify(all_images), 200
        except Exception as e:
            return f"An Error Occured: {e}"
    if request.method == 'DELETE':
        try:
            all_images = [doc.to_dict() for doc in user_Ref.stream()]
            flag = False
            if(request.json["hex"] in list(map(lambda el: el["hex"], all_images))):    flag = True
            if(not flag):   raise NotFound("Not found!")
            user_Ref.document(request.json.get("hex")).delete()
            return jsonify({"success": True}), 200
        except NotFound as e:
            return f"An Error Occured: {e}"
            
        except Exception as e:
            return f"An Error Occured: {e}"
