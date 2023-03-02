class Donation < ApplicationRecord

    belongs_to :charity
    belongs_to :user

    validates :amount, presence: true
    validates :charity_id, presence: true
    validates :user_id, presence: true

end
