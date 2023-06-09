class Customer < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :body, presence: true
  
  belongs_to :user
end