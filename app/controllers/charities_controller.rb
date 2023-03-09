class CharitiesController < ApplicationController

    before_action :authorize


    def create
        charity = Charity.create(charity_params)
        if 
    end

    def update

    end

    def destroy

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
        return render json: {errors: ["Not logged in"]}, status: :unauthorized unless session.include? :user_id
    end

end
