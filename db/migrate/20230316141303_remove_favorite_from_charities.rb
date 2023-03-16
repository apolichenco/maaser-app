class RemoveFavoriteFromCharities < ActiveRecord::Migration[7.0]
  def change
    remove_column :charities, :favorite, :boolean
  end
end
