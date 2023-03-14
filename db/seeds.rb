# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


first_user = User.create([{ name: "Abe Poli", password: "reach4Sky", percentage: 10 }])
income = Income.create([{ amount: 2000, user_id: 1}])
charity = Charity.create([{ name: "Chabad Carmel Valley", link: "https://www.chabadcv.com/templates/articlecco_cdo/aid/437313/jewish/Donate.htm"}])
donation = Donation.create([{ amount: 180, user_id: 1, charity_id: 1}])
favorite_charity = FavCharity.create([{ user_id: 1, charity_id: 1}])
subscription = Subscription.create([{ amount: 180, day_of_month: 25, user_id: 1, charity_id: 1}])




