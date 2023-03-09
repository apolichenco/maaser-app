Rails.application.routes.draw do
  resources :donations, only: [:create, :update, :index]
  resources :subscriptions, only: [:create, :update, :delete, :index]
  resources :charities, only: [:create, :update, :delete, :index]
  resources :incomes, only: [:create, :update, :delete, :index]
  resources :users, only: [:index]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
