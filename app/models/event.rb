class Event < ApplicationRecord
  has_many :schedules, inverse_of: :event
  accepts_nested_attributes_for :schedules
  has_many :shops, inverse_of: :event
  accepts_nested_attributes_for :shops
end
