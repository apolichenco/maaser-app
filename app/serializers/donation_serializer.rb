class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :fav_charity, :user_id

  belongs_to :fav_charity

end
