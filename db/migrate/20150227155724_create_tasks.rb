class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :done
      t.string :recurring
      t.string :boolean
      t.integer :every

      t.timestamps null: false
    end
  end
end
