class CharitiesController < ApplicationController

    before_action :authorize

    rescue_from  ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response

    def create
        charity = Charity.create!(params.permit(:name, :link))
        render json: charity, status: :created
    end

    def index
        charities = Charity.all
        render json: charities
    end

    private

end
