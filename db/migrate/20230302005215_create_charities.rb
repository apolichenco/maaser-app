class CreateCharities < ActiveRecord::Migration[7.0]
  def change
    create_table :charities do |t|
      t.string :name
      t.string :link
      t.boolean :favorite

      t.timestamps
    end
  end
end
