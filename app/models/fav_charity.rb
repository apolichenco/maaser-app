class FavCharity < ApplicationRecord

belongs_to :user
belongs_to :charity

validates :user_id, presence: true
validates :charity_id, presence: true, uniqueness: {scope: :user_id}

end
