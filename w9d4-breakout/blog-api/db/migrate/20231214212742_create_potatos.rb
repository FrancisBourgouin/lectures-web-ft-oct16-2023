class CreatePotatos < ActiveRecord::Migration[7.0]
  def change
    create_table :potatos do |t|
      t.string :title
      t.string :type

      t.timestamps
    end
  end
end
