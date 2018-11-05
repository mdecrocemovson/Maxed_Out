class RegistrationsController < Devise::RegistrationsController
  private

  def sign_up_params
    params.require(:user).permit(:height, :weight, :max_squat, :max_bench_press, :max_dead_lift, :email, :password, :password_confirmation, :accountability_switch, :workouts_per_week, :accountability_buddy_email, :dollar_amount)
  end

  def account_update_params
    params.require(:user).permit(:height, :weight, :max_squat, :max_bench_press, :max_dead_lift, :email, :password, :password_confirmation, :accountability_switch, :workouts_per_week, :accountability_buddy_email, :dollar_amount)
  end
end
