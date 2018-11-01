class WorkoutsController < ApplicationController
  before_action :authenticate_user!
  def index
    @workouts = Workout.all
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
