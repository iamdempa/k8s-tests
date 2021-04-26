from flask import Flask
from flask_cors import CORS
# Flask constructor takes the name of current module as argument 
app = Flask(__name__)
CORS(app)

# specified port that the server is running 
PORT = 8083

@app.route("/getname")
def index():
    name = "Jananath Banuka"
    return "My Name is " + name

# main function for the server.js with specified host and port values 
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT)
