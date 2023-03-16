class AddMonthYearToDonations < ActiveRecord::Migration[7.0]
  def change
    add_column :donations, :month, :string
    add_column :donations, :year, :integer
  end
end
