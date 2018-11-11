require 'sidekiq-scheduler'
require 'pry'


class AccountabilityWorker
  include Sidekiq::Worker

  sidekiq_options retry: false


  def perform
    binding.pry
    retrieve_users_who_have_failed.each do |user|
      puts "sidekiq is working..."
      AccountabilityMailer.with(email: user.email, workouts: user.workouts_per_week, buddy_email: user.accountability_buddy_email, dollars: user.dollar_amount).new_email.deliver_later
    end
  end

  private

  def retrieve_users_who_have_failed
    users_who_have_failed = []
    all_users = User.all
    @current_time = Date.today

    all_users.each do |user|
      current_user_workouts = user.workouts
      workouts_in_last_week = []
      current_user_workouts.each do |workout|
        if workout.performed_on < @current_time && workout.performed_on > @current_time - 7

          workouts_in_last_week.push(workout)
        end
      end
      if (user.accountability_switch && workouts_in_last_week.length <= user.workouts_per_week)
        users_who_have_failed.push(user)
      end
    end
    users_who_have_failed
  end
end
