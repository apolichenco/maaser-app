class User < ApplicationRecord

    has_secure_password

    has_many :incomes 
    has_many :donations
    has_many :subscriptions
    has_many :fav_charities
    has_many :charities, through: :fav_charities

    validates :name, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true
    validates :percentage, presence: true, numericality: {in: 1..99}

    def percentecise_it
        self.percentage * 0.01
      end

    def total_income
        income_total = 0
        if self.incomes
            self.incomes.map { |income| income_total += income.amount } 
            helper.number_to_currency(income_total)
        end
    end

    def total_donated
        donations_total = 0
        if self.donations
            self.donations.map { |donation| donations_total += donation.amount } 
            helper.number_to_currency(donations_total)
        end
    end

    def maaser_to_give
        if self.incomes.length > 0
            income_total = 0
            self.incomes.map { |income| income_total += income.amount } 
            donations_total = 0
            self.donations.map { |donation| donations_total += donation.amount } 
            to_give = (income_total * percentecise_it) - donations_total
            helper.number_to_currency(to_give)
        end
        
    end

    def month_total_donations
        monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        month_list_and_total = []
        monthsList.map { |month| 
            month_name = month
            this_months_donations_total = 0
            this_months_donations = self.donations.select {|donation| donation.month == month_name} 
            this_months_donations.map{ |donation| this_months_donations_total += donation.amount}
            total = sprintf('%.2f', this_months_donations_total)
            month_list_and_total.push(total)
        }
        month_list_and_total
    end

    def month_total_incomes
        monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        month_list_and_total = []
        monthsList.map { |month| 
            month_name = month
            this_months_incomes_total = 0
            this_months_incomes = self.incomes.select {|income| income.month == month_name} 
            this_months_incomes.map{ |income| this_months_incomes_total += income.amount}
            total = sprintf('%.2f', this_months_incomes_total)
            month_list_and_total.push(total)
        }
        month_list_and_total
    end

    private

    def helper
      @helper ||= Class.new do
        include ActionView::Helpers::NumberHelper
      end.new
    end


end
