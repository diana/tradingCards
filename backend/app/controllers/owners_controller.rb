class OwnersController < ApplicationController

    def index
        owners = Owner.all
        render json: owners
    end

    def show
        owner = Owner.find(params[:id])
        render json: owner
    end

    def create
        owner = Owner.create(
            name: params[:name],
        )
        redirect_to 'https://localhost:3001/'
    end

end
