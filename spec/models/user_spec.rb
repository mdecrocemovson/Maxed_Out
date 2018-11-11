require 'rails_helper'

require_relative '../../app/models/user'

describe User do
  it {should have_valid(:email).when("dad@dad.com")}
  it {should_not have_valid(:email).when(nil, "")}

  it {should have_valid(:password).when("wellthen")}
  it {should_not have_valid(:password).when(nil, "")}
end
