class Api::V1::SetCollectionsController < ApiController
  def create
    set_collection = SetCollection.new(set_collection_params)
    if set_collection.save
      render json: set_collection
    else
      render json: set_collection.errors.full_messages
    end
  end
  #just used for seeing what sets are put out there rn.
  def index
    set_collections = SetCollection.all
    render json: set_collections
  end

  private

  def set_collection_params
    params.permit(:sets, :reps, :weight, :exercise_id, :workout_id)
  end

end
