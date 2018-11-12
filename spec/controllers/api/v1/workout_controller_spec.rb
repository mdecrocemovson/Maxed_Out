require 'rails_helper'

RSpec.describe Api::V1::WorkoutsController, type: :controller do
  let!(:a_user) {User.create(email: "jakemovson@gmail.com", encrypted_password: "something", id:1)}
  let!(:a_workout) {Workout.create(user: a_user, performed_on: "10/11/2017", location: "Downtown Crossing", goal: "Get big", review: "went pretty well.")}

  describe "GET#show" do
    it "should return the workout" do
      get :show, params: {id: a_workout.id}
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json["performed_on"]).to eq "2017-11-10"
      expect(returned_json["location"]).to eq "Downtown Crossing"
      expect(returned_json["goal"]).to eq "Get big"
    end
  end
#todo: fix
  # describe "POST#create" do
  #   it "creates a new workout" do
  #     post_json = {user_id: a_user.id, performed_on: "10/11/2017", location: "Downtown Crossing", goal: "Get Small??", review: "went fine."}
  #     start_count = Workout.count
  #     post(:create, params: post_json)
  #     returned_json = JSON.parse(response.body)
  #     binding.pry
  #     expect(Workout.count).to eq(start_count + 1)
  #   end
  # end
  #
  # describe "DELETE" do
  #   before(:each) do
  #     get :show, params: {id: a_workout.id}
  #     returned_json = JSON.parse(response.body)
  #     delete :destroy, params: {id: returned_json["id"]}
  #   end
  # #
  # #   it "deletes existing review" do
  # #     #todo
  # #   end
  # # end

  end
end
