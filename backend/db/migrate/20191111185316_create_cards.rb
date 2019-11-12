class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :revered_for
      t.string :description
      t.string :image_url
      t.string :info_url
      
      t.references :owner, null: false, foreign_key: true

      t.timestamps
    end
  end
end
