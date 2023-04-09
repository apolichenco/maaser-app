class DonationsCharitySerializer < ActiveModel::Serializer
  attributes :id, :amount
  belongs_to :fav_charity, serializer: FavCharityCharitySerializer
end
