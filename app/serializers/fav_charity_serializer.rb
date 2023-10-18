class FavCharitySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total_gave_to_this_charity, :name, :link, :image


  has_many :donations

end
