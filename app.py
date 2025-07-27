from flask import Flask, render_template, request, url_for, jsonify
import base64
import cv2
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

face_cascade = cv2.CascadeClassifier("cascades/haarcascade_frontalface_default.xml")
eye__cascade =  cv2.CascadeClassifier("cascades/haarcascade_eye.xml")
smile__cascade = cv2.CascadeClassifier("cascades/haarcascade_smile.xml")


@app.route('/detect', methods=['POST'])
def detect():
    data = request.get_json()
    image_data = data["image"].split(",")[1]
    image_bytes = base64.b64decode(image_data)
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    grayimg = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    height, width = img.shape[:2]


    boxes = []

    faces = face_cascade.detectMultiScale(grayimg,scaleFactor = 1.09, minNeighbors = 5)

    for (x,y,w,h) in faces:
        boxes.append({"x":int(x), "y": int(y), "w": int(w), "h": int(h), "label":"face"})
        grayArea = grayimg[y:y+h, x:x+w]

        eyes = eye__cascade.detectMultiScale(grayArea, scaleFactor=1.1, minNeighbors = 8)

        for(eyesx, eyesy, eyesw, eyesh) in eyes:
            boxes.append({
                "x": int(x + eyesx),
                "y": int(y + eyesy),
                "w": int(eyesw),
                "h": int(eyesh),
                "label":"eye"
            })

        smiles = smile__cascade.detectMultiScale(grayArea, scaleFactor=4.1, minNeighbors = 45)
        for(smilesx, smilesy, smilesw, smilesh) in smiles:
            boxes.append({
                "x": int(x + smilesx),
                "y": int(y + smilesy),
                "w": int(smilesw),
                "h": int(smilesh),
                "label":"smile"
            })

   

    return jsonify({
        "labels": list(set([b['label'] for b in boxes])),
        "boxes": boxes
    })

if __name__ == '__main__':
    app.run(port=3000, debug=True)
