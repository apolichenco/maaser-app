class IncomeSerializer < ActiveModel::Serializer
  attributes :id, :amount, :notes, :month, :year

end
