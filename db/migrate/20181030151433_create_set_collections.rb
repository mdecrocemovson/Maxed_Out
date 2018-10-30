class CreateSetCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :set_collections do |t|
      t.belongs_to :exercise, null:false
      t.belongs_to :workout, null:false
      t.string :sets, null:false
      t.string :reps, null:false
      t.string :weight, null:false
    end
  end
end
