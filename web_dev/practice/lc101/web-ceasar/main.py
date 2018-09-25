from flask import Flask, request
from caesar import rotate_string

app = Flask(__name__)
app.config['DEBUG'] = True

form = """
<!DOCTYPE html>

<html>
    <head>
        <style>
            form {{
                background-color: #eee;
                padding: 20px;
                margin: 0 auto;
                width: 540px;
                font: 16px sans-serif;
                border-radius: 10px;
            }}
            textarea {{
                margin: 10px 0;
                width: 540px;
                height: 120px;
            }}
        </style>
    </head>
    <body>
      <form method="post">
        <label>
            Rotate by:
            <input type="text" value=0 name="rot"/>
        </label>
        <textarea type="text" name="text">{0}</textarea>
        <input type="submit" value="Submit"/>
      </form>
    </body>
</html>
"""
def encrypt():
    text = request.form['text']
    #return text
    rot = request.form['rot']
    new_rot = int(rot)
    answer =  rotate_string(text=text,rot=new_rot)
    return form.format(answer)


@app.route('/', methods=['POST', 'GET'])
def index():
    #return "hompage"
    if request.method == 'GET':
        return form

    else:
        return encrypt()




app.run()
