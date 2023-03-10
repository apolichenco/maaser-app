class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        users = User.all
        render json: users, status: :created
    end

    def create
        user = User.create(params.permit(:name, :password_digest, :percentage))
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.error.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        return render json: {errors: ["Not logged in"]}, status: :unauthorized unless session.include? :user_id
        user = User.find(session[:user_id])
        render json: user, statu: :created
    end

    private

    # def user_params
    #     params.permit(:name, :password_digest, :percentage)
    # end

    def render_not_found_response
        render json: {errors: ["Account Not Found"]}, status: :not_found
    end

end