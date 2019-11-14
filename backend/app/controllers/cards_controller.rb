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
        card = Card.new(
            name: params[:name],
            revered_for: params['revered-for'],
            description: params[:description],
            image_url: params['image-url'],
            info_url: params['info-url'],
            owner_id: params['owner-id']
        )
        if card.save
            redirect_to 'http://localhost:3001/'
        else
            render json: {error: 'Invalid Entry'}
        end
    end

    def update
        card = Card.find(params[:id])
        card.update(owner_id: params[:owner_id])
    end

    def delete
        card = Card.find(params[:id])
        card.destroy
    end

end
