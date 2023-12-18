class UrlsController < ApplicationController
  before_action :set_url, only: %i[ show edit update destroy ]
  before_action :authorize, only: [:new, :edit, :create]


  # CRUD / BREAD =>

  # GET /urls or /urls.json
  def index
    if current_user
      @urls = current_user.urls.all
    else
      @urls = Url.all
    end
  end

  # GET /urls/1 or /urls/1.json
  def show
  end


  def visit
    url = Url.find_by_short_url(params[:short_url])

    redirect_to url.long_url, allow_other_host: true

  end
  # GET /urls/new
  def new
    @url = current_user.urls.new
  end

  # GET /urls/1/edit
  def edit
  end

  # POST /urls or /urls.json
  def create
    short_url = rand(36**8).to_s(36) # a-z + 0-9
    @url = current_user.urls.new(url_params)
    @url.short_url = short_url

    respond_to do |format|
      if @url.save
        format.html { redirect_to url_url(@url), notice: "Url was successfully created." }
        format.json { render :show, status: :created, location: @url }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @url.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /urls/1 or /urls/1.json
  def update
    respond_to do |format|
      if @url.update(url_params)
        format.html { redirect_to url_url(@url), notice: "Url was successfully updated." }
        format.json { render :show, status: :ok, location: @url }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @url.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /urls/1 or /urls/1.json
  def destroy
    @url.destroy

    respond_to do |format|
      format.html { redirect_to urls_url, notice: "Url was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_url
      @url = Url.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def url_params
      params.require(:url).permit(:long_url, :description)
    end
end
