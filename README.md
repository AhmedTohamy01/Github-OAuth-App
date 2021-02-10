
<h1 align="center">
  <img title="github" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Interlincx Logo" width="200" />
  <br>
  Github <br>OAuth App
</h1>

<p><font size="3">
  This is a Github OAuth App built using <strong><em>React.JS</em></strong>, <strong><em>Styled-Conmponents</em></strong> and <strong><em>Material-UI</em></strong>
  <br><br> 
	 This project is about building a web application that allows the users to log in using their Github account by click on a login button, which should redirect them to Github to authenticate, and after successful login, they should be redirected to a profile-page showing their Github Profile Image, Name, Bio and number of their public repos.

If the user tried to access the profile-page without login he should be redirected to the login page again.

</p>


## Table of Contents

- [Project Walk-Through](#project-walk-through)
  - [Home Page](#home-page)
  - [Github Authetication Page](#github-authetication-page)
  - [Profile Page](#profile-page)
- [Technology Used](#technology-used)
- [How To Use](#how-to-use)
- [Author](#author)


# Project Walk-Through

 # Home Page
 
 In this page, all what you have to do is to click on the login button. 

<div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/107523081-0ada4600-6bbd-11eb-929e-a6c4fa28deba.png)

</div>


 # Github Authetication Page

In this page, you should enter your Github username & password and authorize the app to access your account.

![image](https://user-images.githubusercontent.com/54721194/107523958-f21e6000-6bbd-11eb-949e-8aab730a9cb5.png)

![image](https://user-images.githubusercontent.com/54721194/107523568-8b00ab80-6bbd-11eb-9d04-58288d949031.png)

</div>

 # Profile Page

In this page, you will be redirected to a page shows your Profile Image, Name, Bio and Number of your public Repos.

<div align="center"><a name="menu"></a>

![image](https://user-images.githubusercontent.com/54721194/107524175-2eea5700-6bbe-11eb-8917-459451cb5793.png)

</div>



# Technology Used

I have built this project using the following tools:
- React.JS
- React Hooks.
- Material UI.
- Styled Components.
- Node.JS
- Express.JS
- VSCode.


# How To Use

To be able to use this react app locally in a development environment you will need the following:

1) You will need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer.

2) Then From your terminal, you should do the following:

```cmd
# Clone this repository
git clone https://github.com/AhmedTohamy01/Github-OAuth-App

# Go into the repository
cd Github-OAuth-App

# Install dependencies
npm install 

```

3) Run Express & React concurrently 
```cmd
 in package.json file, under "scripts" section,
 replace this line >>> "start": "react-scripts start"
 with this line >>> "start": "concurrently \" node -r esm -r dotenv/config src/server/server.js \" \"react-scripts start\"
 ```

4) Create your own OAuth App on Githun
Login to your Github account and create an OAuth app by following the steps provided here (https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app). Note: For this example, set your Homepage URL to http://localhost:3000/ and Authorization callback URL to http://localhost:3000/profile since you will run the app locally. 

5) Create a .env file in the root folder and set these variables: 
```cmd
REACT_APP_CLIENT_ID=Your Client ID from Github
REACT_APP_CLIENT_SECRET=Your Client Secret from Github
REACT_APP_REDIRECT_URI=http://localhost:3000/profile
REACT_APP_PROXY_URL=http://localhost:5000/authenticate
```

6) Run the app
```cmd
npm start
```

7) Open the app in your browser 
(http://localhost:3000)

8) Now you can see the project in your browser. 
Happy Hacking!


# Author

👤 **Ahmed Tohamy**
- Github: https://github.com/AhmedTohamy01
- Linkedin: https://www.linkedin.com/in/ATohamy
- Email: Ahmed-Tohamy@outlook.com
