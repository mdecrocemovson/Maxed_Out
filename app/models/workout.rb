class Workout < ApplicationRecord
  has_many :set_collections
  validates :performed_on, presence: true;
  validates :location, presence: true;
  validates :goal, presence: true;
  has_many :exercises, through: :set_collections
  #maybe not the best fix
  belongs_to :user, optional: true
end
