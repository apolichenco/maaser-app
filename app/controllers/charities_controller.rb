class CharitiesController < ApplicationController

    before_action :authorize

    rescue_from  ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response

    def create
        charity = Charity.create!(charity_params)
        render json: charity, status: :created
    end

    def index
        charities = Charity.all
        render json: charities
    end

    private

    def charity_params
        params.permit(:name, :link, :favorite)
    end

    def authorize
        return render json: {errors: ["You are not logged in."]}, status: :unauthorized unless session.include? :user_id
    end

    def render_unproccesable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
