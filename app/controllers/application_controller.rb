class ApplicationController < ActionController::API
    # include ActionController::Serialization
    include ActionController::Cookies

    def current_user_id
        user = User.find(session[:user_id])
        user.id
    end
    
    def authorize
        return render json: {errors: ["You are not logged in."]}, status: :unauthorized unless session.include? :user_id
    end

    def render_unproccesable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
