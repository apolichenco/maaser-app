class CreateFavCharities < ActiveRecord::Migration[7.0]
  def change
    create_table :fav_charities do |t|
      t.integer :user_id
      t.integer :charity_id

      t.timestamps
    end
  end
end
