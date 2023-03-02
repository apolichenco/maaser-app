class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :created
    end

end
