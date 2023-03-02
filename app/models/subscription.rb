class Subscription < ApplicationRecord

    belongs_to :user
    belongs_to :charity

    validates :amount, presence: true
    validates :day_of_month, presence: true
    validates :user_id, presence: true, uniqueness: {scope: :charity_id}
    validates :charity_id, presence: true

end
