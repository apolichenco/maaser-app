class Income < ApplicationRecord

    belongs_to :user

    validates :amount, presence: true
    validates :user_id, presence: true

    before_save :add_to_total_income

    @@total_income = 0


    def add_to_total_income
        @@total_income += self.amount
    end

    def self.total_income
        @@total_income
    end

end
