Rails.application.routes.draw do
  resources :fav_charities, only: [:create, :destroy, :index]
  resources :donations, only: [:create, :update, :index]
  resources :subscriptions, only: [:create, :update, :destroy, :index]
  resources :charities, only: [:create, :index]
  resources :incomes, only: [:create, :update, :destroy, :index]
  resources :users, only: [:update, :index]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
