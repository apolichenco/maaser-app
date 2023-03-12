class IncomesController < ApplicationController

    before_action :authorize

    rescue_from  ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        income = Income.create!(income_params)
        render json: income, status: :created
    end

    def update
        income = Income.find(params[:id])
        if income.user.id == current_user_id
            income.update!(income_params)
            render json: income, status: :created
        else
            render json: {errors: ["Not your income"]}, status: :unauthorized
        end
    end

    private

    def income_params
        params.permit(:amount, :notes, :repeat, :user_id, :maaser_exempt)
    end

    def render_not_found_response
        render json: {errors: ["Income Not Found"]}, status: :not_found
    end

end
