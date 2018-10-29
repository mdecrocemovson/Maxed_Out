class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :height, :integer
    add_column :users, :weight, :integer
    add_column :users, :max_squat, :integer
    add_column :users, :max_bench_press, :integer
    add_column :users, :max_dead_lift, :integer
  end
end
