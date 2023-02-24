class CharitySerializer < ActiveModel::Serializer

    attributes :id, :name, :link, :favorite, :created_at, :updated_at
  
end