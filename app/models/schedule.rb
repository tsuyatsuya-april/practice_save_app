class Schedule < ApplicationRecord
  belongs_to :event, inverse_of: :schedules
  validates_presence_of :event

  validates :savedate, presence: true
end
