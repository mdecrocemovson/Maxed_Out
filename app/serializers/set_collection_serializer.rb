class SetCollectionSerializer < ActiveModel::Serializer
  attributes :id, :exercise_id, :workout_id, :sets, :reps, :weight

  belongs_to :exercise
end
