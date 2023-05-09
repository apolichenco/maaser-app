class Income < ApplicationRecord

    belongs_to :user

    validates :amount, presence: true
    validates :user_id, presence: true
    validates :month, presence: true
    validates :year, presence: true, numericality: {in: 2023..2024}

end
