class Donation < ApplicationRecord

    # belongs_to :charity
    belongs_to :user
    belongs_to :fav_charity

    validates :amount, presence: true
    validates :fav_charity_id, presence: true
    validates :user_id, presence: true
    validates :month, presence: true
    validates :year, presence: true



end
