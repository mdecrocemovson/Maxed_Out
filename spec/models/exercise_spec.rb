require 'rails_helper'

require_relative '../../app/models/exercise'

describe Exercise do
  it {should have_valid(:name).when("Squat")}
  it {should_not have_valid(:name).when(nil, "")}

  it {should have_valid(:description).when("The squat is a lift for the quadriceps and calf muscles.")}
  it {should_not have_valid(:description).when(nil, "")}
end
