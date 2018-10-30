class WorkoutsController < ApplicationController
  before_action :authenticate_user!
  def index
    @workouts = Workout.all
  end

  def new
    @workout = Workout.new
  end
end
