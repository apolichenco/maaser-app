class FavCharitySerializer < ActiveModel::Serializer
  attributes :id, :charity, :user_id, :total_gave_to_this_charity

  belongs_to :charity

  has_many :donations

end
