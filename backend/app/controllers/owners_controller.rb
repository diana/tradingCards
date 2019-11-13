class OwnersController < ApplicationController

    def index
        owners = Owner.all
        render json: owners, include: [:cards]
    end

    def show
        owner = Owner.find(params[:id])
        render json: owner, include: [:cards]
    end

    def create
        owner = Owner.create(
            name: params[:name], include: [:cards]
        )
        redirect_to 'https://localhost:3001/'
    end

end
