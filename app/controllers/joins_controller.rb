class JoinsController < ApplicationController
  
  def new
  end


  def create
    @join = Join.new(join_params)
    @event = Event.find(params[:event_id])
    @join.event_id = @event.id
    if @join.save
      flash[:success] = 'join created!'
      redirect_to event_path(params[:event_id])
    else
      @event = Event.find(params[:event_id])
      render "events/show"
    end
  end

  def update
    if @join.update(join_params)
      redirect_to event_path(params[:event_id])
    else
      @event = Event.find(params[:event_id])
      render "events/show"
    end
  end

  def join_params
    params.require(:join).permit(:nickname, :email, 
      date_answers_attributes: [:schedule_id, :status], 
      shop_answers_attributes: [:shop_id, :status, :vote])
      .merge(event_id: :event_id)
  end
end
