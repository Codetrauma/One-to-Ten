<h1 align='center' style='font-weight: bold'> One-to-Ten</h1>
<div>
<p align='center'>One-To-Ten, a project inspired by <a style='font-weight: bold' href='https://www.okcupid.com/'>OKCupid</a>, is a platform that allows users to take surveys and match with other users based on response data.
<br>
</br>
</p>

</div>

<h1 align='center' style='font-weight: bold'> Index </h1>
<br>
<div align='center' style='font-weight: bold'>
 <a href='https://github.com/JTannerShaw/One-to-Ten/wiki/MVP-Feature-List'>Feature List</a> - <a href='https://github.com/JTannerShaw/One-to-Ten/wiki/Database-Schema'>DB Schema</a> - <a href='https://github.com/JTannerShaw/One-to-Ten/wiki/API-Documentation'>API Documentation</a> - <a href='https://github.com/JTannerShaw/One-to-Ten/wiki/Frontend-Routes'> Frontend Routes </a>
<br>
</br>
</div>
<div align='center'>
<h1 align='center' style='font-weight: bold'>Technologies Used </h1>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>
</div>
<br>
</br>

## Launching Locally

### Prerequisites
 - [Python 3.10](https://www.python.org/downloads/)
 - [PostgreSQL 12](https://www.postgresql.org/docs/12/index.html)

### Getting Started

1. Clone the project repository

    * ```git clone git@github.com:JTannerShaw/One-to-Ten.git```

2. Install Dependencies

* Flask:

    * ``` pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt ```

* React-App:

    * ```npm install```

3. Create a .env file base on the .env.example given in the root directory

```
FLASK_APP=app
FLASK_ENV=development
SECRET_KEY=<you strong secret key>
DATABASE_URL=postgresql://<username>:<password>@<server>/<database>

```

4. Setup your username and database based on what you setup in your .env

5. Migrate and seed the database by intiating the pipenv shell from the root directory.

    * ```pipenv shell```
    * ```flask db upgrade```
    * ```flask seed all```

6. Start the server from the root directory.

    * ```flask run```


7. Start the frontend from the react-app directory.

    * ```flask run```



## Site Preview


New users can register for an account by entering a unique email address, a username, a secure password, and by verifying they are over 18 years of age.

<div align="center">
<br/>
<img src="https://i.ibb.co/64kr5hv/signup-demo.gif" alt="Registration Demo" width="500" align="center"/>
<br/>
<br/>
</div>


Existing users can log in to their account by submitting their credentials via the login form.

<div align="center">
<br/>
<img src="https://i.ibb.co/ZX1Tws4/login-example.gif" alt="Log-in" width="500" align="center"/>
<br/>
<br/>
</div>

Logged in users can end their session by clicking the log out button.

<div align="center">
<br/>
<img src="https://i.ibb.co/SxYbF3y/logout-demo.gif" alt="Log-in"  width="500" align="center"/>
<br/>
<br/>
</div>



Users may log in with an pre-existing demo user account by clicking the link on the login page.

<div align="center">
<br/>
<img src="https://i.ibb.co/60Sx0Tw/demo-login.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>

Logged-in users can activate their account my taking the icebreaker survey which initiaties automatic match generation.

<div align="center">
<br/>
<img src="https://i.ibb.co/JnYHjqV/account-activation.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>

Activated users can answer questions in order to improve their compatibility with other users.

<div align="center">
<br/>
<img src="https://i.ibb.co/Z6HNjVb/survey-completion-1.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>


Activated users can view and amend their previous responses by clicking the respective survey button.

<div align="center">
<br/>
<img src="https://i.ibb.co/wSCQwbd/view-previous.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>

Activated users can delete their previous responses to a given question by toggling the 'Deletion Mode' text on the 'Answer Questions' page, and clicking the 'X' button next to the survey they wish to delete.
<div align="center">
<br/>
<img src="https://i.ibb.co/3R6jtFF/response-deletion.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>


Activated users may view their matches with other users, which will display their compatibility score, their most- and least-similar topics, their biography, and their social media links.

<div align="center">
<br/>
<img src="https://i.ibb.co/HghYQNF/view-matches.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>


Logged-in users can edit their profile information and preview what their page will look like when other users are viewing their match profile.

<div align="center">
<br/>
<img src="https://i.ibb.co/FhLS2db/Edit-Profile-and-Preview-1.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>


Activated users can change their compatibility scores with other users by completing additional surveys.

<div align="center">
<br/>
<img src="https://i.ibb.co/6PHW2Dr/edit-matches.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>

Activated users can remove matches by blocking another user.

<div align="center">
<br/>
<img src="https://i.ibb.co/t4XsLfG/block-user.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>


Activated users can remove all matches and survey responses by deactivating their profile.

<div align="center">
<br/>
<img src="https://i.ibb.co/T0KzZ4M/Deactivate-profile.gif" alt="Demo User"  width="500"  align="center"/>
<br/>
<br/>
</div>






## Contributors
