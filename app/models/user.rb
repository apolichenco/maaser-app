class User < ApplicationRecord

    has_secure_password

    has_many :incomes 
    has_many :donations
    has_many :subscriptions
    has_many :fav_charities
    has_many :charities, through: :donations

    validates :name, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true
    validates :percentage, presence: true, numericality: {less_than_or_equal_to: 100}

    def percentecise_it
        self.percentage * 0.01
      end

    def total_income
        income_total = 0
        if self.incomes
            self.incomes.map { |income| income_total += income.amount } 
            sprintf('%.2f', income_total)
        end
    end

    def total_donated
        donations_total = 0
        if self.donations
            self.donations.map { |donation| donations_total += donation.amount } 
            sprintf('%.2f', donations_total)
        end
    end

    def maaser_to_give
        if self.incomes.length > 0
            income_total = 0
            self.incomes.map { |income| income_total += income.amount } 
            donations_total = 0
            self.donations.map { |donation| donations_total += donation.amount } 
            to_give = (income_total * percentecise_it) - donations_total
            sprintf('%.2f', to_give)
        end
        
    end




end
