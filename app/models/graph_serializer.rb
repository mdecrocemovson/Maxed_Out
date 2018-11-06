class GraphSerializer < ActiveModel::Serializer
  attributes :current_user, :bench_presses, :deadlifts, :squats

  def bench_presses
    # ActiveModel::SerializableResource.new(
      # array of objects,
      # each_serializer: serializer you wish to use,
      # scope: { }
    # )

    # ActiveModel::ArraySerializer.new(
    #   User.all,
    #   each_serializer: UserSerializer
    # )

    # ActiveModel::ArraySerializer.new(
    #   User.all,
    #   each_serializer: UserSerializer
    # )
  end

  def deadlifts

  end

  def squats

  end

  def current_user
    if scope
      scope
    else
      nil
    end
  end

  private

  # the below could go in the GraphOrganizer poro

  def retrieve_set_collections_for_user
    workouts = scope.workouts
    @set_collections_for_user = []

    set_collections = workouts.each do |workout|
      # grab all of the workotus and stuff in an array
    end
    @set_collections_for_user
  end

  def set_collections_for_user
    @set_collections_for_user ||= retrieve_set_collections_for_user
  end

  def benchpress_for_user
    # filter out the data in use set_collections_for_user to grab only set_collections for benchpress
  end

  def squats_for_user
    #
  end

  def deadlifts_for_user
    #
  end

end
