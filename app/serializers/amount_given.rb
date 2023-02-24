class AmountGivenSerializer < ActiveModel::Serializer

    attributes :id, :amount_given, :charity_id, :user_id, :created_at, :updated_at
  
end