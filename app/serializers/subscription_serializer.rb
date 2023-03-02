class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :day_of_month, :user_id, :charity_id, :amount
end
