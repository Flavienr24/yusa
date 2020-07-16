class DropCaseTable < ActiveRecord::Migration[6.0]
  def change
    drop_table(:cases)
  end
end
