class OwnersController < ApplicationController

    def index
        owners = Owner.all
        render json: owners, include: [:cards]
    end

    def show
        owner = Owner.find(params[:id])
        render json: card, include: [:cards]
    end

    def create
        owner = Owner.create(
            name: params[:name]
        )
        redirect_to 'https://localhost:3001/'
    end

    def update 
        owner = Owner.find(params[:id])
        owner.update(name: params[:name])
        render json: owner, include: [:cards]
    end 

    def destroy 
        owner = Owner.find(params[:id])
        owner.update
        render json: {status: 204} 
    end 
end
