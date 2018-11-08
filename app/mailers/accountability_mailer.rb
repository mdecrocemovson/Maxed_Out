require_relative '../workers/accountability_worker'

class AccountabilityMailer < ApplicationMailer
  def new_email
    mail(
      to: "mdecrocemovson@gmail.com",
      subject: "Hello"
    )
  end
end
