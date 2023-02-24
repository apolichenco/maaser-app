class IncomeSerializer < ActiveModel::Serializer

    attributes :id, :money_in, :notes, :repeat, :user_id, :maaser_exempt, :created_at, :updated_at
  
end