class Exercise < ApplicationRecord
  has_many :set_collections
  validates :name, presence: true;
  has_many :workouts, through: :set_collections
end
