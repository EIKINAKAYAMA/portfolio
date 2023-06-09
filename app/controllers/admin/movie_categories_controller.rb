class Admin::MovieCategoriesController < Admin::ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:new, :create, :edit, :update, :destroy]

  def new
    @movie_check = MovieCategory.find_by(user_id: current_user.id)
      if @movie_check.present?
        redirect_to action: "edit", id: current_user.id
      else
        @movie_category = MovieCategory.new
      end
  end

  def create
    create_movie_params[:name].each_with_index do |name, i|
      @movie_category = MovieCategory.new(name: name, user_id: current_user.id)
      if name == ""
        next
      else
        if @movie_category.save
          category_movie_params(i)[:videos].each do |video|
            if video !=""
              @movie_category.category_movies.create(video: video)
            else
              next
            end
          end
        end
      end
    end

    respond_to do |format|
      format.json
    end
  end

  def edit
    @movie_categories = MovieCategory.where(user_id: current_user.id)

    respond_to do |format|
      format.html
      format.json
    end
  end

  def update
    @movie_categories = MovieCategory.where(user_id: current_user.id)
    name_length = @movie_categories.length
    create_movie_params[:name].each_with_index do |name, i|
      # カテゴリーが追加されてない場合の挙動
      if i < name_length
        if name == ""
          @movie_categories[i].destroy
        else
          @movie_categories[i].update(name: name)
          video_length = @movie_categories[i].category_movies.length

          if @movie_categories[i].save
            category_movie_params(i)[:videos].each_with_index do |video, j|
              if j < video_length
                if video == ""
                  @movie_categories[i].category_movies[j].destroy
                elsif video == "exist"
                  next
                else
                  @movie_categories[i].category_movies[j].update(video: video)
                end
              else
                if video !=""
                  @movie_categories[i].category_movies.create(video: video)
                else
                  next
                end
              end
            end
          end
        end
      # カテゴリーが追加された場合の挙動
      else
        @movie_category = MovieCategory.new(name: name, user_id: current_user.id)
        if name == ""
          next
        else
          if @movie_category.save
            category_movie_params(i)[:videos].each do |video|
              if video !=""
                @movie_category.category_movies.create(video: video)
              else
                next
              end
            end
          end
        end
      end
    end
    
    respond_to do |format|
      format.json
    end
  end


  private
  def create_movie_params
    params.require(:movie_categories).permit(name: []).merge(user_id: current_user.id)
  end

  def category_movie_params(i)
    params.require(:category_movies).require("#{i}").permit({videos: []})
  end

  def set_user
    @user = User.key(params[:user_id])
  end

end
