class Api::V1::WorkoutsController < ApiController

  def create
    workout = Workout.new(workout_params)
    if workout.save
      render json: workout
    else
      render json: workout.errors.full_messages.join
    end
  end

  def workout_params
    params.require(:workout).permit(:user_id, :date, :location, :goal, :review).merge(user_id: current_user.id)
  end
end
