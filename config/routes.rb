Rails.application.routes.draw do
  devise_for :users
  root to: "cleaners#index"
  resources :cleaners

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

end
