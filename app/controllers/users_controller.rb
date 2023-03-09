class UsersController < ApplicationController

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
            render json: {errors: user.error.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        return render json: {errors: ["Not logged in"]}, status: :unauthorized unless session.include? :user_id
        user = User.find(session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: {errors: ["Not logged in"]}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:name, :password_digest, :percentage)
    end

end