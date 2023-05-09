class Donation < ApplicationRecord

    belongs_to :user
    belongs_to :fav_charity

    validates :amount, presence: true
    validates :fav_charity_id, presence: true
    validates :user_id, presence: true
    validates :month, presence: true
    validates :year, presence: true, numericality: {in: 2023..2024}

    # def divide_by_month
    #     income_total = 0
    #     if self.incomes
    #         self.incomes.map { |income| income_total += income.amount } 
    #         sprintf('%.2f', income_total)
    #     end
    # end

    def date 
        date = self.created_at.to_s
        date.first(7)
    end

    # def 
    #     monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    #     monthsList.map { |month| }
    # end


end
