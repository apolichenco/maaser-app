class User < ApplicationRecord

    has_secure_password

    has_many :incomes 
    has_many :donations
    has_many :subscriptions
    has_many :fav_charities
    has_many :charities, through: :donations

    validates :name, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true

    def total_income
        income_total = 0
        if self.incomes
            self.incomes.map { |income| income_total += income.amount } 
            income_total
        # else 
        #     null
        end
    end

    def total_donated
        donations_total = 0
        if self.donations
            self.donations.map { |donation| donations_total += donation.amount } 
            donations_total
        end
    end

    def maaser_to_give
        if self.incomes.length > 0
            to_give = self.total_income / self.percentage
            total_to_give = to_give - self.total_donated
            total_to_give
        end
    end


end
