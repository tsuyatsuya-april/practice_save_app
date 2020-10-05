class Join < ApplicationRecord
  belongs_to :event
  has_many :date_answers
  accepts_nested_attributes_for :date_answers
  has_many :shop_answers
  accepts_nested_attributes_for :shop_answers

end
