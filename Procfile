release: python server/manage.py migrate
web: python server/manage.py collectstatic --no-input; gunicorn --pythonpath server spaced-flashcard-site.wsgi --log-file -