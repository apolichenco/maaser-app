Rails.application.routes.draw do
  resources :user_tests
  resources :subscriptions
  resources :amount_givens
  resources :charities
  resources :incomes
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
