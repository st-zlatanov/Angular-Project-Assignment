# MotorTrend Marketplace - sell your car parts Application

MotorTrend is a marketplace application built with Angular and Firebase as a project for the SoftUni Angular Course. It's purpose is to provide access to marketplace functionality, where car parts are being sold.


## Routes
| Route  | Description | Access Level |
| -------------------------------------------- |
| /home  | Home Page  | All users |
| /add-article  | Add Part  | Registered only |
| /view-articles  | View All Parts For Sale  | Registered only |
| /user-parts | All parts the current user has for sale  | Registered only |
| /edit-article/:id  | Edit part  | Registered only |
| /login  | Login page  | Guests only |
| /register  | Register page  | Guests only |

The already logged in user is authenticated to add parts, view parts for sale, view only his parts and edit and delete them.


## Usage

**Home page**

route: '/home'

Welcome page.

**Add parts page**

route: '/add-article'

A page where you can add parts.

**View All Parts page**

route: '/view-articles'

A page displaying all of the parts, stored in the database.

**User's parts page**

route: '/user-parts'

A page displaying all parts that the current user has for sale. From there he can edit or delete them.

**Edit Part page**

route: '/edit-article/:id'

A page where the seller can edit his part's details.

**Login page**

route: '/login'

A login page.

**Register page**

route: '/register'

A register page.