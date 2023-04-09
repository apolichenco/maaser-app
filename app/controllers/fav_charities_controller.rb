class FavCharitiesController < ApplicationController

    before_action :authorize

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def destroy
        fav_charity = FavCharity.find(params[:id])
        if fav_charity.user.id == current_user_id
            if fav_charity.donations.length > 0
                render json: {errors: ["You already donated to this charity, so you can't remove it"]}, status: :unauthorized
            else 
                fav_charity.destroy
                head :no_content            
            end
        else
            render json: {errors: ["Not your subscription"]}, status: :unauthorized
        end
    end

    def index
        fav_charities = FavCharity.all
        render json: fav_charities, status: :created
    end

    def create
        fav_charity = FavCharity.create!(params.permit(:user_id, :charity_id))
        render json: fav_charity, status: :created
    end


    private

    def render_not_found_response
        render json: {errors: ["Charity Was Not Found"]}, status: :not_found
    end

end
