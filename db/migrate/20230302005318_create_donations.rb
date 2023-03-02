class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.float :amount
      t.integer :charity_id
      t.integer :user_id

      t.timestamps
    end
  end
end
