# spaced-flashcard-site
OSU Winter 2021 Hackathon - Spaced Repetition Flashcard Site

---

# Backend Setup
Do the following commands at the top-level directory
1. `python -m venv env`
1. `source env/bin/activate`
1. `pip3 install django`

---

## Setting SECRET_KEY environment variable
### Generating secret keys
1. `$ python -m pip install Django`
1. `$ python3`
1. `from django.utils.crypto import get_random_string`
1. `chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'`
1. `SECRET_KEY = get_random_string(50, chars)`
1. `print(SECRET_KEY)`
1. `exit()`

### Add SECRET_KEY environment variable
#### bash/zsh(macOS)
1. Open terminal
2. `$ export SECRET_KEY='[value]'` (replacing [value] with the secret key you are using)

#### Windows 8/10
1. In Search, search for and then select: Edit environment variables for your account
1. In the User variables section, click New to open the New User Variable dialog box.
1. Enter 'SECRET_KEY' and its value, and click OK. The variable is added to the User variables section of the Environment Variables dialog box.
1. Click OK in the Environment Variables dialog box.

---


# Frontend Setup
Go into the client directory and execute:
1. `npm install`
2. `npm run start`

development version of the app can then be accessed at:
`localhost:3000`

---

