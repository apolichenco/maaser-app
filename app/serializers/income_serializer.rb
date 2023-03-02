class IncomeSerializer < ActiveModel::Serializer
  attributes :id, :amount, :notes, :repeat, :user_id, :maaser_exempt
end
