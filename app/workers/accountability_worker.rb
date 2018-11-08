class AccountabilityWorker
  include Sidekiq::Worker

  sidekiq_options retry:false

  def perform
    puts "sidekiq is working..."
    AccountabilityMailer.new_email.deliver_now
  end
end
