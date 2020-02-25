class ChangeColumnToCases < ActiveRecord::Migration[6.0]
  def change
    rename_column :cases, :case_title, :title
  end
end
