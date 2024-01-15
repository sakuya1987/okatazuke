require "test_helper"

class CleanersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cleaners_index_url
    assert_response :success
  end
end
