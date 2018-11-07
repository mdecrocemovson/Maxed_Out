class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    # AccountabilityWorker.perform_async
    # render text: "Request added to the queue."
  end
end
