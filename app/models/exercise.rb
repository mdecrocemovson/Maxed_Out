class Exercise < ApplicationRecord
  has_many :set_collections
  validates :name, presence: true;
  validates :description, presence: true;
  has_many :workouts, through: :set_collections
end
