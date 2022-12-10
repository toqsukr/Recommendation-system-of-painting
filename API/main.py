from api import create_app
from flask_ngrok import run_with_ngrok
from flask_cors import CORS

app = create_app()

run_with_ngrok(app)

if __name__ == '__main__':
    app.run()