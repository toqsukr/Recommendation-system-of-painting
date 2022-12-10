class RepeateError(Exception):
    pass
    
class NotFound(Exception):
    pass

import uuid
from flask import Blueprint, request, jsonify, make_response
from firebase_admin import firestore
from flask_cors import cross_origin, CORS

db = firestore.client()
user_Ref = db.collection('user')
user_rcmd = db.collection('rcmd')

userAPI = Blueprint('userAPI', __name__)

CORS(userAPI)

@userAPI.route('/rcmd', methods=['GET', 'POST'])
def recommendation():
    if request.method == 'GET':
        try:
            package_img = [doc.to_dict() for doc in user_rcmd.stream()]
            return _corsify_actual_response(jsonify(package_img)), 200
        except Exception as e:
            return f"An Error Occured: {e}"
    if request.method == 'POST':
        try:
            package_img = [doc.to_dict() for doc in user_rcmd.stream()]
            flag = False
            if(not len(package_img) and request.json["src"] in list(map(lambda el: el["src"], package_img))):    flag = True
            if(flag):   raise RepeateError("This picture has already exist!")
            id = uuid.uuid4()
            request.json.update({"hex": id.hex})
            user_rcmd.document(id.hex).set(request.json)
            return _corsify_actual_response(jsonify({"success": True})), 200
        except RepeateError as e:
            return f"An Error Occured: {e}"
        except Exception as e:
            return f"An Error Occured: {e}"


@userAPI.route('/collection', methods=['GET', 'POST', 'DELETE', 'OPTIONS'])
@cross_origin()
def collection():
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response(), 204
    if request.method == 'POST':
        try:
            all_images = [doc.to_dict() for doc in user_Ref.stream()]
            flag = False
            if(not len(all_images) and request.json["src"] in list(map(lambda el: el["src"], all_images))):    flag = True
            if(flag):   raise RepeateError("This picture has already exist!")
            id = uuid.uuid4()
            request.json.update({"hex": id.hex})
            user_Ref.document(id.hex).set(request.json)
            return _corsify_actual_response(jsonify({"success": True})), 200
        except RepeateError as e:
            return f"An Error Occured: {e}"
        except Exception as e:
            return f"An Error Occured: {e}"
    if request.method == 'GET':
        try:
            all_images = [doc.to_dict() for doc in user_Ref.stream()]
            return _corsify_actual_response(jsonify(all_images)), 200
        except Exception as e:
            return f"An Error Occured: {e}"
    if request.method == 'DELETE':
        try:
            all_images = [doc.to_dict() for doc in user_Ref.stream()]
            flag = False
            if(request.json["hex"] in list(map(lambda el: el["hex"], all_images))):    flag = True
            if(not flag):   raise NotFound("Not found!")
            user_Ref.document(request.json.get("hex")).delete()
            return _corsify_actual_response(jsonify({"success": True})), 200
        except NotFound as e:
            return f"An Error Occured: {e}"
            
        except Exception as e:
            return f"An Error Occured: {e}"

def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response

def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

