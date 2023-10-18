class RemoveCharityIdFromFavCharities < ActiveRecord::Migration[7.0]
  def change
    remove_column :fav_charities, :charity_id, :integer
  end
end
