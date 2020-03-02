class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]

    def index
    # GET /articles
      @articles = Article.all
    end
    def show
    # GET /articles/:id
    #@article = article.find(params[:id]) => défini par :set_article
    #pareil pour EDIT, UPDATE et DESTROY
    end

    def new
    # GET /articles/new
      @article = Article.new
    # 1st request to get the empy form
    end
    def create
    # POST /articles
      @article = Article.new(article_params)
      @article.save
    #2nd request to post the form
      redirect_to article_path(@article)
    # To redirect to the new article
    end

    def edit
    # GET /articles/:id/edit
    # 1st request to get the empy form
    end
    def update
    # PATCH /articles/:id
      @article.update(article_params)
    #2nd request to patch the form
      redirect_to article_path(@article)
    #to redirect to the updated article
    end

    def destroy
    # DELETE /articles/:id
      @article.destroy
      redirect_to articles_path
      #to redirect to all the articles
    end

    private

    def set_article
        @article = Article.find(params[:id])
    end

    def article_params
      params.require(:article).permit(:title, :main_image, :body)
    end
end
