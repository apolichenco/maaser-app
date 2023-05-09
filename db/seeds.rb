# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# first_user = User.create([{ name: "Abe Poli", password: "reach4Sky", percentage: 10 }])
# income = Income.create([{ amount: 2000, user_id: 1}])
charity = Charity.create([{ name: "Chabad Carmel Valley", link: "https://www.chabadcv.com/templates/articlecco_cdo/aid/437313/jewish/Donate.htm"}])
# favorite_charity = FavCharity.create([{ user_id: 1, charity_id: 2}])
# second_favorite_charity = FavCharity.create([{ user_id: 1, charity_id: 1}])
# donation = Donation.create([{ amount: 180, user_id: 1, fav_charity_id: 1}])
# subscription = Subscription.create([{ amount: 180, day_of_month: 25, user_id: 1, charity_id: 1}])
second_charity = Charity.create([{ name: "Chabad Coral Springs", link: "https://www.coralspringschabad.org/templates/articlecco_cdo/aid/488285/jewish/DONATE.htm"}])
third_charity = Charity.create([{ name: "Collel Chabad", link: "https://1.colelchabad.org/Donate_Now.htm?aCampaign=ZDML&%query_string"}])
fourth_charity = Charity.create([{ name: "Friendship Circle Montreal", link: "https://www.friendshipcircle.ca/donate"}])
fifth_charity = Charity.create([{ name: "Chai Lifeline", link: "https://www.chailifeline.org/donate.php"}])






