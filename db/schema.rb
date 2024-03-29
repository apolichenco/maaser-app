# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_10_18_144951) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "charities", force: :cascade do |t|
    t.string "name"
    t.string "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
  end

  create_table "donations", force: :cascade do |t|
    t.decimal "amount", precision: 30, scale: 2
    t.integer "fav_charity_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "month"
    t.integer "year"
  end

  create_table "fav_charities", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "link"
    t.string "image"
  end

  create_table "incomes", force: :cascade do |t|
    t.decimal "amount", precision: 30, scale: 2
    t.string "notes"
    t.boolean "repeat"
    t.integer "user_id"
    t.boolean "maaser_exempt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "month"
    t.integer "year"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer "day_of_month"
    t.integer "user_id"
    t.integer "charity_id"
    t.decimal "amount", precision: 30, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.float "percentage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
