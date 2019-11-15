# tradingCards

tradingCards is an in-browser application designed and written by Adam Chernitsky and Diana Miller.

Run Instructions:
    1. Ruby is needed to run this program. To install Ruby: a) First check if Ruby is installed by entering "ruby -v" in your terminal (ITerm2). a.1)If it is installed, you will see a version such as "ruby 2.6.1p33". a.2) if not installed see b) b) For installation instructions see https://www.ruby-lang.org/en/documentation/installation
    2. Now you will need to install lite-server by running 'npm install light-server’ In your terminal
    3. Clone the project onto your device (make sure you build a directory out for this)
    4. Get into the backend folder in your terminal and run ‘bundle install’, ‘rails db:migrate’, and ‘rails db:seed'
    5. Now you will need to run your backend server with the command ‘rails s'
    6. Next go to your frontend folder and run ‘lite-server’ which should open up your browser! If this doesn’t happen head to ‘http://localhost:3001/index.html'

tradingCards App Overview:

This is an app for science lovers! With this app you can see cards with famous scientist and trade with others on the app! Each card is a link to a page more information on the scientist that is displays. This page also lets you know who currently owns that card, and allows you trade with the owner of that card.

 On the main page you can create new scientist cards for your favorite scientist that might not be listed, and if you’re not a user you can head up to the navigation bar and click user to send you to the user page where you can register yourself as a user! Each user has their own page that shows which cards the own and allows them to delete their account (but first make sure you don’t own any cards!) once they are done with the trading card hobby!

 Check out a video of our project here https://youtu.be/2gsJPWASqIk