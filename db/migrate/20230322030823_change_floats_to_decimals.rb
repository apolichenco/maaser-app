class ChangeFloatsToDecimals < ActiveRecord::Migration[7.0]
  def change
    change_column :donations, :amount, :decimal
    change_column :incomes, :amount, :decimal
    change_column :subscriptions, :amount, :decimal
  end
end
