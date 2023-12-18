require "test_helper"

class PotatosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @potato = potatos(:one)
  end

  test "should get index" do
    get potatos_url, as: :json
    assert_response :success
  end

  test "should create potato" do
    assert_difference("Potato.count") do
      post potatos_url, params: { potato: { title: @potato.title, type: @potato.type } }, as: :json
    end

    assert_response :created
  end

  test "should show potato" do
    get potato_url(@potato), as: :json
    assert_response :success
  end

  test "should update potato" do
    patch potato_url(@potato), params: { potato: { title: @potato.title, type: @potato.type } }, as: :json
    assert_response :success
  end

  test "should destroy potato" do
    assert_difference("Potato.count", -1) do
      delete potato_url(@potato), as: :json
    end

    assert_response :no_content
  end
end
