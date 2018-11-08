class WorkoutsController < ApplicationController
  before_action :authenticate_user!
  def index
    @workouts = Workout.all.order(performed_on: :desc)
    @current_time = Date.today
    @current_user = current_user
    @current_user_workouts = current_user.workouts
    # every week do
    @workouts_in_last_week = []
    @current_user_workouts.each do |workout|
      if workout.performed_on < @current_time && workout.performed_on > @current_time - 7
        @workouts_in_last_week.push(workout)
      end
    end

    if (current_user.accountability_switch && @workouts_in_last_week.length <= current_user.workouts_per_week)
      @current_user_email = @current_user.email
      @current_user_workouts_per_week = @current_user.workouts_per_week
      @current_user_buddy_email = @current_user.email
      @current_user_dollars = @current_user.dollar_amount
      AccountabilityWorker.perform_async(@current_user_email, @current_user_workouts_per_week, @current_user_buddy_email, @current_user_dollars)
    end
    render text: "Request added to the queue."
  end

  def new
    @workout = Workout.new
  end

  def destroy
    @workout = Workout.find(params[:id])
    @workout.destroy

    redirect_to workouts_path
  end
end
