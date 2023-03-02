class DonationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :charitie_id, :user_id
end
