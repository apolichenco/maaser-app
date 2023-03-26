class ChangeCharityIdToFavCharityId < ActiveRecord::Migration[7.0]
  def change
    rename_column :donations, :charity_id, :fav_charity_id
  end
end
