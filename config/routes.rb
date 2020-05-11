Rails.application.routes.draw do
  root to: 'pages#landing'

  devise_for :admins, path: '', path_names: { sign_in: 'admin'}

  resources :cases
  resources :articles
  get 'about', to: 'pages#about', as: :about
  # get 'landing', to: 'pages#landing', as: :landing
  get 'home', to: 'pages#home', as: :home
  # Test page for front dev
  get 'test_page', to: 'pages#test_page', as: :test_page


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
