Rails.application.routes.draw do
  resources :urls
  resources :users, only: [:new, :create]

  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  post "/logout" => "sessions#destroy"

  get "/u/:short_url" => "urls#visit"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "urls#index"
end
