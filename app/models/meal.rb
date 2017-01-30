class Meal < ApplicationRecord

	NAME_REGEX = /\A[a-zA-Z ]*$\z/
	 
	 # Minimum of 3 because of TEA *wink*
	 validates :name,
	 			presence: true,
	 			length: { minimum:3, maximum: 50},
	  			format: { with: NAME_REGEX, message: "Only Letters and Spaces allowed." }
	 
	 
	 validates :description, 
	 			presence: true, 
	 			length: { maximum: 500 } # Incase it is a recipe on how to cook...
end
