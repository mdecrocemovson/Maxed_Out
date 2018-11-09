require 'rails_helper'

require_relative '../../app/models/set_collection'

describe SetCollection do
  it {should have_valid(:sets).when(2)}
  it {should_not have_valid(:sets).when(nil, "")}

  it {should have_valid(:reps).when(2)}
  it {should_not have_valid(:reps).when(nil, "")}

  it {should have_valid(:weight).when(2)}
  it {should_not have_valid(:weight).when(nil, "")}
end
