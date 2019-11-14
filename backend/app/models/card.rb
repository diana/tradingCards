class Card < ApplicationRecord
    belongs_to :owner
    validates :name, :description, :image_url, :info_url, presence: true, uniqueness: true
    validates :revered_for, :owner_id, presence: true
end
