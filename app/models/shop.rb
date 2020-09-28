class Shop < ApplicationRecord
  belongs_to :event, inverse_of: :shops
  validates_presence_of :event

  validates :shop_name, presence: true
end
