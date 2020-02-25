class CreateCases < ActiveRecord::Migration[6.0]
  def change
    create_table :cases do |t|
      t.string :client_name
      t.string :case_title
      t.string :main_image

      t.timestamps
    end
  end
end
