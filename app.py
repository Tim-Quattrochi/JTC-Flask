from flask import Flask
from flask import render_template

app = Flask(__name__)
# restart the server on file changes.
app.config['DEBUG'] = True


# Routes
@app.route('/')
def home():
    return render_template('index.html', text='Hello World!')

@app.route('/football')
def football():
    return render_template('football.html')

@app.route('/programming')
def programming():
    return render_template('programming.html')

if __name__ == '__main__':
    app.run(debug=True)