Rails.application.routes.draw do
  get 'joins/new'
  root to: "events#index"
  resources :events do
    resources :joins
  end
end
