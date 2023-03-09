class User < ApplicationRecord

    has_secure_password

    has_many :incomes 
    has_many :donations
    has_many :subscriptions

    validates :name, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true

    

end
