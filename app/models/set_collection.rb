class SetCollection < ApplicationRecord
  validates :sets, presence: true, numericality: {only_integer: true, less_than_or_equal_to: 10, greater_than_or_equal_to: 1}
  validates :reps, presence: true, numericality: {only_integer: true, less_than_or_equal_to: 30, greater_than_or_equal_to: 1}
  validates :weight, presence: true, numericality: {only_integer: true, less_than_or_equal_to: 500, greater_than_or_equal_to: 1}
  validates :exercise_id, presence: true
  belongs_to :workout
  belongs_to :exercise
end
