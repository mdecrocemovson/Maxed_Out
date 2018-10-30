class Workout < ApplicationRecord
  has_many :set_collections
  belongs_to :user
end
