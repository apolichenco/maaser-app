class UserSerializer < ActiveModel::Serializer

    attributes :id, :name, :password_digest, :percentage, :created_at, :updated_at
  
end