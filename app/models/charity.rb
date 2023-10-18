class Charity < ApplicationRecord

    # has_many :subscriptions

    validates :name, presence: true, uniqueness: true

    # def total_donated_to_this
    #     income_donated = 0
    #     user = User.find(session[:user_id])
    #     if user.incomes
    #         user.incomes.map { |income| income_donated += income.amount } 
    #         income_donated
    #     end
    # end

end
