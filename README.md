# updated-portfolio
![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
* [Title](#title)
* [Deployed Link](#deployed-link)
* [Site Picture](#site-picture)
* [Technologies Used](#technologies-used)
* [Description](#description)
* [Work Involved](#work-involved)
* [Code Snippet](#code-snippet)
* [License](#license)
* [Authors](#authors)
* [Questions](#questions)
* [Acknowledgments](#acknowledgments)

## Deployed Link
* Click this link to view the site.
[Deployed Link](https://jessny-portfolio.herokuapp.com/)

## Site Picture
![Site](public/assets/images/portfolio.gif)

## Technologies Used
* javascript
* CSS
* MySQL
* Sequelize
* Express
* NodeJs
* Handlebars
* Formspree
* Heroku
* Github

## Description
Take a look at my portfolio! This is a full stack, mobile responsive portfolio that displays 3 projects I have developed. It also has an about me section, a contact me section, and a blog. 

## Work Involved
For this application, I developed the front end aspects of the application using bulma and handlebars. I added my blogs within the MySQL database using sequelize, added the contact me functionality using formspree, and I deployed it using heroku.

## Code Snippet
* This code snippet returns the blog page along with the different blogs stored within the database.
```
  app.get("/blog", function (req, res) {
        db.Blog.findAll({})
        .then(function(data) {
        var hbsObject = {
            blogs: data
        };
        console.log(hbsObject);
        res.render("blog", hbsObject);
    });
    });
```

## License
This project is covered under MIT.

## Authors
**UC Berkeley Coding Bootcamp**

**Jessny Joseph** 

## Questions 
* [Github](https://github.com/jessnyj)
* [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

## Acknowledgments
Trilogy Education Services
