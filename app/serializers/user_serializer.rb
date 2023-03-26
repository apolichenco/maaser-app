class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :total_income, :total_donated, :maaser_to_give, :percentage

  has_many :donations
  has_many :fav_charities
  has_many :incomes
  has_many :subscriptions



end
