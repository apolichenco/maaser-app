class CreateIncomes < ActiveRecord::Migration[7.0]
  def change
    create_table :incomes do |t|
      t.float :money_in
      t.string :notes
      t.boolean :repeat
      t.integer :user_id
      t.boolean :maaser_exempt

      t.timestamps
    end
  end
end
