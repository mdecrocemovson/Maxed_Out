class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :performed_on, :goal, :review, :current_user_id, :location

  has_many :set_collections
  has_many :exercises

  def current_user_id
    if scope
      scope.id
    else
      nil
    end
  end
end
