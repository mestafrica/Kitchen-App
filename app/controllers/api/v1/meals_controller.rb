module Api::V1
	
class MealsController < ApplicationController
	def index
		@meal = Meal.all
		
		render json: @meal 
	end

	def show 
		render json: @meal
	end

	def create 
		@meal = Meal.new(meal_params)

	    if @meal.save
	      render json: @meal, status: :created, location: @meal
		 else
		   render json: @meal.errors, status: :unprocessable_entity
		 end
	end

	def update
		
		if @meal.update(meal_params)
			render json: @meal
		else
			render json: @meal.errors, status: :unprocessable_entity
		end
 	end

  	def destroy
    	@meal.destroy
  	end

  	private
    # Use callbacks to share common setup or constraints between actions.
    def set_meal
      @meal = Meal.find(params[:id])
    end

    def meal_params
    	params.require(:meal).permit(:name, :description,:picture_path,:meal_type)
    end

	end		
end
