class AddExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name, null:false
      t.string :description, null:false
      t.timestamps
    end
  end
end
