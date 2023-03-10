class Donation < ApplicationRecord

    belongs_to :charity
    belongs_to :user

    validates :amount, presence: true
    validates :charity_id, presence: true
    validates :user_id, presence: true

    before_save :add_to_total_gave

    @@total_gave = 0

    def add_to_total_gave
        @@total_gave += self.amount
    end

    def charity
        self.charity

    def self.total_gave
        @@total_gave
    end

end
