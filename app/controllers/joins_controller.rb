class JoinsController < ApplicationController
  
  def new
  end


  def create
    @join = Join.new(join_params)
    if @join.save
      flash[:success] = 'join created!'
      redirect_to event_path(:event_id)
    else
      @event = Event.find(params[:event_id])
      render "events/show"
    end
  end

  def join_params
    params.require(:join).permit(:nickname, date_answers_attributes: [:schedule_id, :status], shop_answers_attributes: [:shop_id, :status])
  end
end
