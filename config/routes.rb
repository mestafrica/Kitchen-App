Rails.application.routes.draw do
  
	  # Scope: Allows routing to controllers without showing it in the URL
  scope module: 'api' do
    namespace :v1 do
      resources :users # Routing to the V1 module.. We also want it to appear in our URL.
      resources :meals
    end
  end

  #from Now on routes go like this: 
  # 1. /v1/users = to access all users
  # 2. /v1/users/1 = to access one user
  # 3. /v1/meals = access all meals
  # 4. /v1/meals/1 = to access a specific meal
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
