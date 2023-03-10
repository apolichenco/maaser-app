class IncomesController < ApplicationController

    before_action :authorize

    rescue_from  ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response

    def create
        income = Income.create!(income_params)
        render json: income, status: :created
    end

    def update
        income = Income.find(params[:id])
        income.update!(income_params)
        render json: income, status: :created
    end

    private

    def income_params
        params.permit(:amount, :notes, :repeat, :user_id, :maaser_exempt)
    end

    def authorize
        return render json: {errors: ["You are not logged in."]}, status: :unauthorized unless session.include? :user_id
    end

    def render_unproccesable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
