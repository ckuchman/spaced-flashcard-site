release: python server/manage.py migrate
web: gunicorn --pythonpath server server.wsgi --log-file -
