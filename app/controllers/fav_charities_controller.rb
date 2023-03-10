class FavCharitiesController < ApplicationController

        # def update
    #     charity = Charity.find(params[:id])
    #     charity.update!(charity_params)
    #     render json: charity, status: :created
    # end

    # def destroy
    #     if session[:user_id]
    #         session.delete :user_id
    #         head :no_content
    #     else
    #         render json: {errors: ["Not authorized"]}, status: :unauthorized
    #     end
    # end

    def index
        charities = FavCharity.all
        render json: charities, status: :created
    end

    # private

    # def charity_params
    #     params.permit(:name, :link, :favorite)
    # end

    # def authorize
    #     return render json: {errors: ["You are not logged in."]}, status: :unauthorized unless session.include? :user_id
    # end

    # def render_unproccesable_entity_response(invalid)
    #     render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    # end

end
