# README

## Charity App

### Overview of project
Personally, I like to give a certain percentage of whatever I make to charity. Until now, I had to use google sheets, and it was a bit all over the place. Everything was on one long paper and it was hard to see how much I made, gave and needed to give. So I made this website to make easier for me and anyone else out there to calculate all this, in a nice and easy to follow manner. There are charts, easy to use forms, and features to make giving easier. 

### Features:
* Make your own account with your name, password, and ehat percentage of what you make you want to give.
* Fill out a form to fill in income, a donation with the amount, month and year.
* Choose a charity from a public list and add it to your private list.
* Or add your own charity with a name and a link to donate.
* Numbers on top of the charts tell you your totals in the year for your income, donations, and how much you have to give based on your percentage.
* Charts that show you all your info together. That includes a chart that shows:
    * How much you made every month of the year
    * How much you gave every month of the year
    * How much you gave to each charity
    * how juch you made every month and how much the donations of that month equal to. (Let's say you made $100, you want to give 10% of that, but you only give $9. That equals $90)
* Change what percentage of your money you want to give. (Not reccomended as it chnages the percentage for everything that you've given before.)

### Installation Instructions
* Fork and clone this repo to your computer
* Run bundle install to access all the gemfiles
* Run rails db:migrate to create the table, and bundle exec rake db:seed if you want some preloaded charities
* Run rails s to create a server
* Run npm install --prefix client to install all the gems for React
* Run npm start --prefix client and clink the link (localhost/...) to show the app on your webpage
* Sign up with username, password, and percentage
* Enjoy all the above features

### Problems
* add suggestions for repeats of donations and incomes
* option to make a charity private
* Be able to change the charts based on year, with a dropdown with different years
* An about page for the importance of charity

### Pictures
![Screenshot 2023-05-25 131752](https://github.com/apolichenco/maaser-app/assets/98846858/1accbca1-161e-4501-b520-e9731f6cbefd)
