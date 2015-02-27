class TasksController < ApplicationController

  def index

  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_parameters)
    if @task.save
      redirect_to @task
    end
  end

  def show
    @task = Task.find(params[:id])
  end


  private
    def task_parameters
      params.require(:task).permit(:name, :recurring, :every)
    end
end
