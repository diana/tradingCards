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
            name: params[:name]
        )
        redirect_to 'http://localhost:3001/user.html'
    end

    def destroy
        owner = Owner.find(params[:id])
        owner.delete
    end

end
