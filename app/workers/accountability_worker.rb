class AccountabilityWorker
  include Sidekiq::Worker

  sidekiq_options retry:false

  def perform(user_email, user_workouts_per_week,user_accountability_buddy_email, user_dollars)
    puts "sidekiq is working..."
    AccountabilityMailer.with(email: user_email, workouts: user_workouts_per_week, buddy_email: user_accountability_buddy_email, dollars: user_dollars).new_email.deliver_now
  end
end
