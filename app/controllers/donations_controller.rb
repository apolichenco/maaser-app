class DonationsController < ApplicationController

    
    before_action :authorize

    rescue_from  ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response

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

    def authorize
        return render json: {errors: ["You are not logged in."]}, status: :unauthorized unless session.include? :user_id
    end

    def render_unproccesable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
