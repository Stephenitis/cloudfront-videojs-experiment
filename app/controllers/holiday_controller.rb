class HolidayController < ApplicationController
  def index
    @contact = Contact.new
  end

  def create
    p params
  end
end
