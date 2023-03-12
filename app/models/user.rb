class User < ApplicationRecord

    has_secure_password

    has_many :incomes 
    has_many :donations
    has_many :subscriptions
    has_many :fav_charities

    validates :name, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true

    def total_income
        income_total = 0
        self.incomes.map { |income| income_total += income.amount } 
        income_total
    end

    def maaser_to_give
        income_total = self.total_income
        to_give = income_total / self.percentage
        to_give - self.total_donated
    end

    def total_donated
        donations_total = 0
        self.donations.map { |donation| donations_total += donation.amount } 
        donations_total
    end

end
