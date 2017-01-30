require 'test_helper'

class MealTest < ActiveSupport::TestCase
 def setup
 	
 	@meal = Meal.new( name: "Test Meal one", description: " A Sample meal test that should test the validations in place")

 end

 test "Name and Description should not be blank or made up of spaces" do
   	
   	@meal.name = "       "

   	@meal.description = "       "
     
     assert_not @meal.valid?
   end

   test "Name field can only have spaces and letters. No numbers" do 

   		@meal.name = " pie^2.2"

   		assert_not @meal.valid?

   end

    test "Name field should have atleast 3 Characters" do 

   		@meal.name = "po"

   		assert_not @meal.valid?

   end

   test "Description field can only have 500 Characters" do 

   		@meal.description = " pie 2.2"*100

   		assert_not @meal.valid?

   end
end
