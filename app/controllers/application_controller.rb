class ApplicationController < ActionController::Base
  before_action :authenticate_admin!, except: [:home, :about, :mentions, :formations]

end
