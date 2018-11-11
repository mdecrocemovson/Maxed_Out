require 'rails_helper'

require_relative '../../app/models/workout'

describe Workout do
  it {should have_valid(:performed_on).when("10/11/2018")}
  it {should_not have_valid(:performed_on).when(nil, "")}

  it {should have_valid(:location).when("289 D Street")}
  it {should_not have_valid(:location).when(nil, "")}

  it {should have_valid(:goal).when("Get 225")}
  it {should_not have_valid(:goal).when(nil, "")}
end
