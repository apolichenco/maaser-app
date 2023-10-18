class RenameUserAndCharityIds < ActiveRecord::Migration[7.0]
  def change
    add_column :fav_charities, :name, :string
    add_column :fav_charities, :link, :string
    add_column :fav_charities, :image, :string
  end
end
