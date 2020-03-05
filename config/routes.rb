Rails.application.routes.draw do
  devise_for :admins
  root to: 'pages#home'

  resources :cases
  resources :articles
  get 'about', to: 'pages#about', as: :about


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
