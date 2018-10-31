class Workout < ApplicationRecord
  has_many :set_collections
  has_many :exercises, through: :set_collections
  belongs_to :user
end
