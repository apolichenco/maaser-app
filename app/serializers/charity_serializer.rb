class CharitySerializer < ActiveModel::Serializer
  attributes :id, :name, :link

  has_many :fav_charities
end
