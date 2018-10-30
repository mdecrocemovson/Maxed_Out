Rails.application.routes.draw do
  root 'workouts#index'
  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :users, only: [:show]
  resources :workouts do
    resources :set_collections
  end

  namespace :api do
    namespace :v1 do
      resources :exercises
      resources :workouts
    end
  end
end
