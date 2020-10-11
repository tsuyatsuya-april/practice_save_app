class Event < ApplicationRecord
  has_many :schedules, inverse_of: :event, dependent: :destroy
  accepts_nested_attributes_for :schedules, allow_destroy: true
  has_many :shops, inverse_of: :event, dependent: :destroy
  accepts_nested_attributes_for :shops, allow_destroy: true
  has_many :joins, dependent: :destroy
end
