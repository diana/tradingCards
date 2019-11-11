class CardsController < ApplicationController

    def index
        cards = Card.all
        render json: cards
    end

    def show
        card = Card.find(params[:id])
        render json: card
    end

    def create
        card = Card.create(
            name: params[:name],
            description: params[:description],
            owner_id: params[:owner_id]
        )
        redirect_to 'https://localhost:"our local host number"/'
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
