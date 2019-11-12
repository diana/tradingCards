class CardsController < ApplicationController

    def index
        cards = Card.all
        render json: cards, include: [:owner]
    end

    def show
        card = Card.find(params[:id])
        render json: card, include: [:owner]
    end

    def create
        card = Card.create(
            name: params[:name],
            revered_for: params['revered-for'],
            description: params[:description],
            image_url: params['image-url'],
            info_url: params['info-url'],
            owner_id: params['owner-id']
        )
        redirect_to 'http://localhost:3001/'
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
