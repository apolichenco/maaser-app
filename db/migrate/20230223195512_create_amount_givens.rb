class CreateAmountGivens < ActiveRecord::Migration[7.0]
  def change
    create_table :amount_givens do |t|
      t.float :amount_given
      t.integer :charity_id
      t.integer :user_id

      t.timestamps
    end
  end
end
