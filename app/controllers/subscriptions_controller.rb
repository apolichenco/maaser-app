class SubscriptionsController < ApplicationController

    before_action :authorize

    rescue_from  ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        subscription = Subscription.create!(subscription_params)
        render json: subscription, status: :created
    end

    def update
        subscription = Subscription.find(params[:id])
        subscription.update!(subscription_params)
        render json: subscription, status: :created
    end

    def destroy
        subscription = Subscription.find(params[:id])
        if subscription.user.id == current_user_id
            subscription.destroy
            head :no_content
        else
            render json: {errors: ["Not your subscription"]}, status: :unauthorized
        end
    end

    private

    def subscription_params
        params.permit(:day_of_month, :user_id, :charity_id, :amount)
    end

    def render_not_found_response
        render json: {errors: ["Subscription Not Found"]}, status: :not_found
    end

end
