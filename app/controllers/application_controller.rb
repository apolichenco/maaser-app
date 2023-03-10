class ApplicationController < ActionController::API
    # include ActionController::Serialization
    include ActionController::Cookies

    def current_user_id
        user = User.find(session[:user_id])
        user.id
    end

end
