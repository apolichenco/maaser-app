class FavCharity < ApplicationRecord

    belongs_to :user
    belongs_to :charity
    has_many :donations

    validates :user_id, presence: true
    validates :charity_id, presence: true, uniqueness: {scope: :user_id}

    def total_gave_to_this_charity
        total_given = 0
        if self.donations
            self.donations.map { |donation| total_given += donation.amount } 
            sprintf('%.2f', total_given)
        end
    end

end
