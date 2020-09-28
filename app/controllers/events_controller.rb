class EventsController < ApplicationController
  def new
    @event = Event.new
    2.times { @event.schedules.build, @event.shops.build }
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
      params.require(:event).permit(:name, :description, schedule_attributes: [:savedate, :savetime], shop_attributes: [:shop_name, :shop_url, :map_url, :comment])
    end
end
