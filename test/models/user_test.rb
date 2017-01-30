require 'test_helper'

class UserTest < ActiveSupport::TestCase
     def setup

        @user = User.new( first_name: "Kwaku", last_name:"Boeteng",email: "kwaku.boateng@meltwater.org")

     end



     filename ="#{Rails.root}/test/countries.json"

    # read_file read file and return the output
    def read_file(filename)
        data_hash= {}
        file = File.read(filename)
        data_hash = JSON.parse(file)
        return data_hash
    end

    def get_countries(jsondata)
        data_hash ={}
        countries = []
        counter = 0
        data_hash = read_file(jsondata)

        while counter <data_hash.length
            # puts (data_hash[counter]["name"]["common"])
            countries.push(data_hash[counter]["name"]["common"])

            counter +=1
        end


        return countries

    end



     test "user should be valid" do
            assert @user.valid?
     end

     test "First name should be present" do
        @user.first_name = " "
        assert_not @user.valid?
     end

      test "First name not be too long" do
        @user.first_name ="a"*101
        assert_not @user.valid?
     end

      test " First name not be too short" do
        @user.last_name ="a"*2
        assert_not @user.valid?
     end

    test "Last name should be present" do
        @user.last_name = " "
        assert_not @user.valid?
     end

     test "Last name not be too long" do
        @user.last_name ="a"*101
        assert_not @user.valid?
     end

      test " Last name not be too short" do
        @user.last_name ="a"*2
        assert_not @user.valid?
     end

     test "Nationality should be present" do
        @user.nationality = " "
        assert_not @user.valid?
     end

     test "Nationality not be too long" do
        @user.nationality ="a"*101
        assert_not @user.valid?
     end

      test " Nationality name not be too short" do
        @user.nationality ="a"*2
        assert_not @user.valid?
     end

      test "Nationality validation should accept valid country names " do
        valid_countries = get_countries(filename)
        valid_countries.each do|countries|
            assert @chef.valid?,"#{email.inspect} is valid email address"
        end
      end







     test "Sex should be present" do
        @user.sex = " "
        assert_not @user.valid?
     end







     test "User email should be present" do
        @user.email = " "
        assert_not @user.valid?
     end

     test "Email must be within bounds" do
        @user.email = "a"*101 +"@meltwater.org"
        assert_not @user.valid?
     end

      test "Email address should be unique" do
        @user1 = @user.dup
        @user1.email = @user.email.upcase
        @user.save
        assert_not @user1.valid?
     end

     test "Email validation should accept valid addresses " do
        valid_addresses =%w[user@mel.com R_TDD-DS@example.geeks.com user@example.com first.last@user.co lau+joe@monk.com   ]
        valid_addresses.each do|email|
            assert @chef.valid?,"#{email.inspect} is valid email address"
        end
     end

     test "Email validation should reject invalid addresses " do
       invalid_addr = %w[ahdfla@eee+hdlfadfa.com dfja@yahoom,com first.last_at_news.com djhfakdf@example. dfhkaf@example.hello.com]
            invalid_addr.each do|email|
                @user.email = email
                assert_not @user.valid?, "#{email.inspect} is an invalid email address"
     end




end
