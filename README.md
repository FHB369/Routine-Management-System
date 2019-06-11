# Routine-Management-System
How to Setup
=========================
-------------------------
## Requirements:

PHP: 7.1.3 or higher

NODE: 11.14 or higher

NPM: 6.7.0  or higher 

-------------------------

Clone this repository:

`git clone https://github.com/FHB369/Routine-Management-System.git`

Enter to the project directory:

`cd Routine-Management-System`

Run Composer Update:

`composer update`

Copy `.env.example` as `.env`:

`cp .env.example .env`

Now open `.env` and fill up the necessary information as per as your environment  
such as `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_NAME` etc.

Run these:

`php artisan key:generate`

To migrate Database (For fresh/empty database only):

`php artisan migrate --seed`

Otherwise,

`php artisan migrate:fresh --seed`

Run NPM commands: 

`npm install`

Finally run the project:

`php artisan serve`

---------------------------
##Development:

Before starting development in this project, you should run:

`npm run watch`

By running this, your changes into any blade/css/js file will auto compile and auto reload in the browser.
If you do not want to auto reload the browser, remove the `LOCAL_ADDRESS` variable from the `.env`
 file.
 
