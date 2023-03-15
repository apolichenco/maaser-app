class FavCharitySerializer < ActiveModel::Serializer
  attributes :id, :charity

  belongs_to :charity
end
