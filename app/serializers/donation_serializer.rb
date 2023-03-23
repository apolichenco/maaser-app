class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :charity, :user_id

end
