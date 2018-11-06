class AddAccountabilityToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :accountability_switch, :boolean, default:false
    add_column :users, :workouts_per_week, :integer
    add_column :users, :accountability_buddy_email, :string
    add_column :users, :dollar_amount, :integer
  end
end
