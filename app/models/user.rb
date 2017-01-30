class User < ApplicationRecord
  enum nationality: [:kenya, :south_africa, :ghana, :nigeria]
  enum sex: [:male, :female, :other]
end
