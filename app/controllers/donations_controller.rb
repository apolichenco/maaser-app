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
        donation.update!(donation_params)
        render json: donation, status: :created
    end

    private

    def donation_params
        params.permit(:amount, :charity_id, :user_id)
    end

    def render_not_found_response
        render json: {errors: ["Donation Not Found"]}, status: :not_found
    end

end
