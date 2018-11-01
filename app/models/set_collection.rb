class SetCollection < ApplicationRecord
  validates :sets, presence: true
  validates :reps, presence: true
  validates :weight, presence: true
  validates :exercise_id, presence: true
  belongs_to :workout
  belongs_to :exercise
end
