class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :total_income, :total_donated, :maaser_to_give, :percentage, :month_total_donations, :month_total_incomes
 
  has_many :donations
  has_many :fav_charities
  has_many :incomes

 

end
