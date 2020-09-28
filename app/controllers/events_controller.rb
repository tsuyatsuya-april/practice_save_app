class EventsController < ApplicationController
  def new
    @event = Event.new
    @event.schedules.build
    @event.shops.build
  end 
  
  def create
    @event = Event.new(event_params)
    if @event.save
      flash[:success] = 'Event created!'
      redirect_to root_url
    else
      render 'new'
    end
  end
  
  private
    
    def event_params
      params.require(:event).permit(:name, :description, schedules_attributes: [:savedate, :savetime], shops_attributes: [:shop_name, :shop_url, :map_url, :comment])
    end
end
