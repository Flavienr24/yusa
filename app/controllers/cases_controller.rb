class CasesController < ApplicationController
  before_action :set_case, only: [:show, :edit, :update, :destroy]

  # GET /cases
  def index
    @cases = Case.all
  end

  # GET /cases/1
  def show
    @cases = Case.all.order("created_at DESC").where.not(id:(params[:id]))
  end

  # GET /cases/new
  def new
    @case = Case.new
  end

  # GET /cases/1/edit
  def edit
  end

  # POST /cases
  def create
    @case = Case.new(case_params)
    @case.save
    redirect_to case_path(@case)
  end

  # PATCH/PUT /cases/1
  def update
    @case.update(case_params)
    redirect_to case_path(@case)
  end

  # DELETE /cases/1
  def destroy
    @case.destroy
    redirect_to cases_path
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_case
      @case = Case.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def case_params
      params.require(:case).permit(:client_name, :title, :body, :main_image)
    end
end
