class AddMonthYearToIncome < ActiveRecord::Migration[7.0]
  def change
    add_column :incomes, :month, :string
    add_column :incomes, :year, :integer
  end
end
