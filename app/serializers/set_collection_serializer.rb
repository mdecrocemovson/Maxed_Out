class SetCollectionSerializer < ActiveModel::Serializer
  attributes :id, :exercise_id, :workout_id, :sets, :reps, :weight, :current_user

  def current_user
    if scope
      scope
    else
      nil
    end
  end

  belongs_to :exercise
end
