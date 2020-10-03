class ShopAnswer < ApplicationRecord
  belongs_to :join
  belongs_to :shop
  validates_presence_of :join
end
