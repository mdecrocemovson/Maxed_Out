class Api::V1::WorkoutsController < ApiController
  def create
    workout = Workout.new(workout_params)
    if workout.save
      render json: workout
    else
      render json: workout.errors.full_messages
    end
  end

  def show
    workout = Workout.find(params[:id])
    render json: workout, include: ["set_collections", "set_collections.exercise"]
  end


  def destroy
    @workout = Workout.find(params[:id])
    @workout.destroy
  end

  private

  def workout_params
    if Rails.env.development?
      params.require(:workout).permit(:user_id, :performed_on, :location, :goal, :review).merge(user_id: current_user.id)
    elsif Rails.env.test?
      params.permit(:user_id, :performed_on, :location, :goal, :review)
    end

  end
end
