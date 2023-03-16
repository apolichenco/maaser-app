class AddImageToCharities < ActiveRecord::Migration[7.0]
  def change
    add_column :charities, :image, :string
  end
end
