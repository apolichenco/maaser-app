class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :charity_id, :user_id
end
