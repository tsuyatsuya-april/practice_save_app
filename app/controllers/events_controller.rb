class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  

  def index
    @events = Event.all.order(id: 'DESC')
  end

  def new
    @event = Event.new
    1.times { @event.schedules.build }
    1.times { @event.shops.build } 
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

  def show
    @joins = Join.all
    @join = Join.new
    1.times { @join.date_answers.build }
    1.times { @join.shop_answers.build }
  end

  def edit
  end

  def update
  end

  def destroy
  end

  
  private
    
    def event_params
      params.require(:event).permit(:name, :description, schedules_attributes: [:savedate, :savetime], shops_attributes: [:shop_name, :shop_url, :map_url, :comment])
    end

    def set_event
      @event = Event.find(params[:id])
    end
end
