class AddWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.belongs_to :user, null:false
      t.date :performed_on, null:false
      t.string :location, null:false
      t.string :goal, null:false
      t.string :review

      t.timestamps
    end
  end
end
