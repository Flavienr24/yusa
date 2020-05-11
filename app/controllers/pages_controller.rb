class PagesController < ApplicationController

  def home
    @cases = Case.all.order("created_at DESC")
    @articles = Article.all.order("created_at DESC")
  end

  def about
  end

  def landing
    render layout: "landing"
  end

  def test_page
  end

end
