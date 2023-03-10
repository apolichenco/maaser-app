class FavCharitiesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def destroy
        fav_charity = FavCharity.find(params[:id])
        if fav_charity.user.id == current_user_id
            fav_charity.destroy
            head :no_content
        else
            render json: {errors: ["Not your subscription"]}, status: :unauthorized
        end
    end

    def index
        fav_charities = FavCharity.all
        render json: charities, status: :created
    end

    private

    def render_not_found_response
        render json: {errors: ["Charity Was Not Found"]}, status: :not_found
    end

end
