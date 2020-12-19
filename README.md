# MotorTrend Marketplace - sell your car parts Application

App is deployed here: https://angular-blog-project.web.app/home

MotorTrend is a marketplace application built with Angular and Firebase as a project for the SoftUni Angular Course. It's purpose is to provide access to marketplace functionality, where car parts are being sold.


## Routes
| Route  | Description | Access Level |
| ------------- | ------------- | ------------- |
| /home  | Home Page  | All users |
| /article/add-article  | Add Part  | Registered only |
| /article/view-articles  | View All Parts For Sale  | Registered only |
| /article/edit-article/:id  | Edit part  | Registered only |
| /user/user-parts | All parts the current user has for sale  | Registered only |
| /user/login  | Login page  | Guests only |
| /user/register  | Register page  | Guests only |

The already logged in user is authenticated to add parts, view parts for sale, view only his parts and edit and delete them.


## Usage

**Home page**

route: '/home'

Welcome page.

**Add parts page**

route: '/article/add-article'

A page where you can add parts.

**View All Parts page**

route: '/article/view-articles'

A page displaying all of the parts, stored in the database.

**User's parts page**

route: '/user/user-parts'

A page displaying all parts that the current user has for sale. From there he can edit or delete them.

**Edit Part page**

route: '/article/edit-article/:id'

A page where the seller can edit his part's details.

**Login page**

route: '/user/login'

A login page.

**Register page**

route: '/user/register'

A register page.