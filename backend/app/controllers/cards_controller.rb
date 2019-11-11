class CardsController < ApplicationController

    def index
        cards = Card.all
        render json: cards, include: [:owner]
    end

    def show
        card = Card.find(params[:id])
        render json: card, inclued: [:owner]
    end

    def create
        card = Card.create(
            name: params[:name],
            description: params[:description],
            owner_id: params[:owner_id]
        )
        redirect_to 'https://localhost:3001/'
    end

    def update_owner
            card = Card.find(params[:id])
            card.update(owner_id: params[:owner_id])
    end

    def delete
        card = Card.find(params[:id])
        card.destroy
    end

end
