class FavCharity < ApplicationRecord

belongs_to :user
belongs_to :charity

validates :user_id, presence: true, uniqueness: {scope: :charity_id}
validates :charity_id, presence: true

# before_save :downcase_fields

# def downcase_fields
#     self.color = color.downcase.capitalize()
#     self.shape = shape.downcase.capitalize()
#  end

end
