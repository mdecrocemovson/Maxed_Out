class UsersController < ApplicationController
  def show
    AccountabilityWorker.perform_async
    @user = User.find(params[:id])
  end
end
