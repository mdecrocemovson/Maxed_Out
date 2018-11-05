Rails.application.routes.draw do
  root 'workouts#index'
  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :users, only: [:show]
  resources :workouts do
    resources :set_collections
  end

  namespace :api do
    namespace :v1 do
      resources :users
      resources :exercises do
        resources :set_collections
      end
      resources :workouts
      resources :set_collections
    end
  end
end
