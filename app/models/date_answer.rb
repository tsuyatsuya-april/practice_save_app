class DateAnswer < ApplicationRecord
  belongs_to :join
  belongs_to :schedule
  validates_presence_of :join
end
