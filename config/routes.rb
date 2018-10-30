Rails.application.routes.draw do
  root 'workouts#index'
  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :users, only: [:show]
  resources :workouts

  namespace :api do
    namespace :v1 do
      resources :workouts
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
