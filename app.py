from flask import Flask
from flask import render_template

app = Flask(__name__)


# Routes
@app.route('/')
def home():
    return render_template('index.html', text='Hello World!')