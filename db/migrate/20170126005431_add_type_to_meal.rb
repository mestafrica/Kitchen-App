class AddTypeToMeal < ActiveRecord::Migration[5.0]
  def change
    add_column :meals, :meal_type,:boolean, :default=>false
    
  end
end
