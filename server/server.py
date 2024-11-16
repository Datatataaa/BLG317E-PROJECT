from flask import Flask,jsonify
import mysql.connector
from mysql.connector import Error
from settings import db_user,db_password,db_host,db_name  
from flask_cors import CORS, cross_origin

connection = mysql.connector.connect(host=db_host, database=db_name, user=db_user, password=db_password)    


app = Flask(__name__)
CORS(app, support_credentials=True)


def db_connection():
    connection = mysql.connector.connect(host=db_host, database=db_name, user=db_user, password=db_password)
    return connection


# example get request
@app.route('/schedules', methods=['GET'])
def get_schedules():
    try:
        # Establish database connection
        connection = db_connection()

        if connection.is_connected():
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM Schedule")
            schedules = cursor.fetchall()

            # Return data as JSON
            return jsonify(schedules), 200
        else:
            return jsonify({'error': 'Failed to connect to the database'}), 500

    except Error as e:
        return jsonify({'error': str(e)}), 500

    finally:
        # Close the connection
        if 'connection' in locals() and connection.is_connected():
            cursor.close()
            connection.close()

@app.route('/disciplines', methods=['GET'])
def get_disciplines():
    try:
        # Establish database connection
        connection = db_connection()

        if connection.is_connected():
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM Discipline")
            disciplines = cursor.fetchall()

            # Return data as JSON
            return jsonify(disciplines), 200
        else:
            return jsonify({'error': 'Failed to connect to the database'}), 500

    except Error as e:
        return jsonify({'error': str(e)}), 500

    finally:
        # Close the connection
        if 'connection' in locals() and connection.is_connected():
            cursor.close()
            connection.close()



if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=True)