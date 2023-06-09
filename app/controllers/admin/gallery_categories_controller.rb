class Admin::GalleryCategoriesController < Admin::ApplicationController
before_action :authenticate_user!
before_action :set_user, only: [:new, :create, :edit, :update, :destroy]


def new
  @gallery_category_check = GalleryCategory.find_by(user_id: current_user.id)
  if @gallery_category_check.present?
    redirect_to action: "edit", id: current_user.id
  else
    @gallery_category = GalleryCategory.new
  end
end

def create
  create_gallery_params[:name].each_with_index do |name, i|
    @gallery_category = GalleryCategory.new(name: name, user_id: current_user.id)
    if name == ""
      next
    else 
      if @gallery_category.save
        category_image_params(i)[:images].each do |image|
          if image !=""
            @gallery_category.category_images.create(image: image)
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
  @gallery_categories = GalleryCategory.where(user_id: current_user.id)
  
  respond_to do |format|
    format.html
    format.json
  end
end

def update
  @gallery_categories = GalleryCategory.where(user_id: current_user.id)
  name_length = @gallery_categories.length
  create_gallery_params[:name].each_with_index do |name, i|
    if i < name_length
      if name == ""
        @gallery_categories[i].destroy
      else
        @gallery_categories[i].update(name: name)
        image_length = @gallery_categories[i].category_images.length
        
        if @gallery_categories[i].save
          category_image_params(i)[:images].each_with_index do |image, j|
            # 元々追加されていた画像群のアップデート
            if j < image_length
              if image == ""
                @gallery_categories[i].category_images[j].destroy
              elsif image == "exist"
                next
              else
                @gallery_categories[i].category_images[j].update(image: image)
              end
              # 編集時に追加されていた画像群のアップデート
            else
              # 既存カテゴリーに削除がある場合は、カテゴリーその物を削除
              if image != ""
                @gallery_categories[i].category_images.create(image: image)
              else
                next
              end
            end
          end
        end
      end
      # カテゴリーが追加された場合の挙動
    else
      @gallery_category = GalleryCategory.new(name: name, user_id: current_user.id)
      if name == ""
        next
      else
        if @gallery_category.save
          category_image_params(i)[:images].each do |image|
            if image !=""
              @gallery_category.category_images.create(image: image)
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
def create_gallery_params
    params.require(:gallery_categories).permit(name: []).merge(user_id: current_user.id)
  end
  
  def category_image_params(i)
    params.require(:category_images).require("#{i}").permit({images: []})
  end

  def set_user
    @user = User.key(params[:user_id])
  end
end