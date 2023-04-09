class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :month, :year, :fav_charity_id, :date


end
