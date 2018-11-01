class Api::V1::SetCollectionsController < ApiController


  def create
    set_collection = SetCollection.new(set_collection_params)
    if set_collection.save
      render json: set_collection
    else
      render json: set_collection.errors.full_messages
      render json: { errors: set_collection.errors.full_messages }
    end
  end

  def index
    set_collections = SetCollection.all
    render json: set_collections
  end

  def destroy
    @set_collection = SetCollection.find(params[:id])
    @set_collection.destroy
    render json: @set_collection
  end

  private

  def set_collection_params
    params.permit(:sets, :reps, :weight, :exercise_id, :workout_id)
  end

end
