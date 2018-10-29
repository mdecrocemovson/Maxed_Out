class AddWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.belongs_to :user, null:false
      t.string :comments, null:false
      t.integer :feeling, null:false
      t.timestamps
    end
  end
end
