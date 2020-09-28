Rails.application.routes.draw do
  root to: "events#new"
  resources :events
end
