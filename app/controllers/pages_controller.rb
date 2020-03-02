class PagesController < ApplicationController
  def home
    @cases = Case.all
  end

  def about
  end

end
