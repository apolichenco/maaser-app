class CreateSubscriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :subscriptions do |t|
      t.integer :day_of_month
      t.integer :user_id
      t.integer :charity_id
      t.float :amount

      t.timestamps
    end
  end
end
