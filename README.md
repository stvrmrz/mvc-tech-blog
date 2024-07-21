<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#link-to-deployed-application">Link to Deployed Application</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Tech Blog Demo

![Project Tech Blog Demo](/blog-demo.gif)

This project was about creating a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. It will be deployed to Render. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

<!-- GETTING STARTED -->
## Getting Started

Please follow these steps if you'd like to clone the repo so you can can see the files yourself

### Prerequisites

Please have a GitHub account and set up your SSH key so you may git pull the latest changes to the repository. It's
reccomended to install Visual Studio code as well.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:stvrmrz/mvc-tech-blog.git
   ```
3. Open the repo 
   ```sh
   cd Note-Taker
   ```
4. Open with VS Code
   ```sh
   code .
   ```

<!-- USAGE EXAMPLES -->
## Link to Deployed Application

_Here is a link to my [Deployed Tech Blog](https://mvc-tech-blog-ggs6.onrender.com)_

<!-- ROADMAP -->
## Roadmap

GIVEN a CMS-style blog site
- [x] WHEN I visit the site for the first time
      THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- [x] WHEN I click on the homepage option
      THEN I am taken to the homepage
- [x] WHEN I click on any other links in the navigation
      THEN I am prompted to either sign up or sign in
- [x] WHEN I choose to sign up
      THEN I am prompted to create a username and password
- [x] WHEN I click on the sign-up button
      THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- [x] WHEN I enter a comment and click on the submit button while signed in
      THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- [x] WHEN I click on the dashboard option in the navigation
      THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- [x] WHEN I click on the button to add a new blog post
      THEN I am prompted to enter both a title and contents for my blog post
- [x] WHEN I click on the button to create a new blog post
      THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- [x] WHEN I click on one of my existing posts in the dashboard
      THEN I am able to delete or update my post and taken back to an updated dashboard
- [x] WHEN I click on the logout option in the navigation
      THEN I am signed out of the site
- [x] WHEN I am idle on the site for more than a set time
      THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Steve Ramirez - [@stvrmrz](https://twitter.com/stvrmrz) - stevearamirez@gmail.com

Project Link: [https://github.com/stvrmrz/mvc-tech-blog](https://github.com/stvrmrz/mvc-tech-blog)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Here are some of the resources that I used that I want to give credit to:

* [othneildrew Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [BCS Support Tutor](https://2u-20.wistia.com/medias/trfd1jx6o2)
* [AskBCS Learning Assistant]