class UsersController < ApplicationController

    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response, 
    rescue_from  ActiveRecord::RecordInvalid, with: :render_unproccesable_entity_response

    def index
        users = User.all
        render json: users, status: :created
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        return render json: {errors: ["Not logged in"]}, status: :unauthorized unless session.include? :user_id
        user = User.find(session[:user_id])
        render json: user, status: :created
    end

    def update
        authorize
        user = User.find(params[:id])
        if user.id == current_user_id
            user.update!(user_params)
            render json: user, status: :created
        else
            render json: {errors: ["Not your account"]}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:name, :password, :percentage)
    end

    # def render_not_found_response
    #     render json: {errors: ["Account Not Found"]}, status: :not_found
    # end

end