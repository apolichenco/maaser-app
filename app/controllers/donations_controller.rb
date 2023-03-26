class DonationsController < ApplicationController

    
    before_action :authorize

    rescue_from  ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        donation = Donation.create!(donation_params)
        render json: donation, status: :created
    end

    def update
        donation = Donation.find(params[:id])
        if donation.user.id == current_user_id
            donation.update!(donation_params)
            render json: donation, status: :created
        else
            render json: {errors: ["Not your donation"]}, status: :unauthorized
        end
    end

    private

    def donation_params
        params.permit(:amount, :fav_charity_id, :user_id, :month, :year)
    end

    def render_not_found_response
        render json: {errors: ["Donation Not Found"]}, status: :not_found
    end

end
