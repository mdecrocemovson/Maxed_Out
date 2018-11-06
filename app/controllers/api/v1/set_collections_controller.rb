class Api::V1::SetCollectionsController < ApiController
  before_action :authenticate_user!

  def create
    set_collection = SetCollection.new(set_collection_params)
    if set_collection.save
      render json: SetCollectionSerializer.new(set_collection, :scope => current_user).to_json
      if set_collection.exercise_id == 1 && set_collection.weight.to_i > current_user.max_bench_press.to_i
        current_user.update_attribute(:max_bench_press, set_collection.weight)
      elsif set_collection.exercise_id == 2 && set_collection.weight.to_i  > current_user.max_squat.to_i
        current_user.update_attribute(:max_squat, set_collection.weight)
      elsif set_collection.exercise_id == 3 && set_collection.weight.to_i > current_user.max_dead_lift.to_i
        current_user.update_attribute(:max_dead_lift, set_collection.weight)
      end
    else
      render json: { errors: set_collection.errors.full_messages.join(', ') }
    end
  end

  def index
    # set_collections = SetCollection.all
    render json: SetCollectionSerializer.new(current_user).to_json
  end

  def show
    render json: current_user.set_collections.where(exercise_id: params[:id])
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
