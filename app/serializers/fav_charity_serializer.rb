class FavCharitySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :charity_id

  belongs_to :charity
end
