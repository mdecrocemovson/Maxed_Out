class GraphSerializer
  def initialize(current_user)
    @current_user = current_user
  end

  def to_h
    data = {exercises: []}

    @current_user.exercises.each do |exercise|
      set_collection_data = @current_user.set_collections.where(exercise: exercise)
      data[:exercises] << {
        name: exercise.name,
        set_collections: set_collection_data
      }
    end
    return data
  end

  def to_json
    to_h.to_json
  end
end
