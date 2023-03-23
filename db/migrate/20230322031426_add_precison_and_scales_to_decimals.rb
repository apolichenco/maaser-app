class AddPrecisonAndScalesToDecimals < ActiveRecord::Migration[7.0]
  def change
    change_column :donations, :amount, :decimal, precision: 30, scale: 2
    change_column :incomes, :amount, :decimal, precision: 30, scale: 2
    change_column :subscriptions, :amount, :decimal, precision: 30, scale: 2
  end
end
