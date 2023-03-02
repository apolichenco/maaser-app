class Charity < ApplicationRecord

    has_many :donations
    has_many :subscriptions

    validates :name, presence: true, uniqueness: true

end
