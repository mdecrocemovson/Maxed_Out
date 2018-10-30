class Exercise < ApplicationRecord
  has_many :set_collections
  has_many :workouts, through: :set_collections
end
