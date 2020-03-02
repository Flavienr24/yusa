class Article < ApplicationRecord
  has_rich_text :body
    has_one_attached :main_image
end
