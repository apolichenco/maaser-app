class Charity < ApplicationRecord

    has_many :donations
    has_many :subscriptions
    has_many :fav_charities

    validates :name, presence: true, uniqueness: true

    

end
