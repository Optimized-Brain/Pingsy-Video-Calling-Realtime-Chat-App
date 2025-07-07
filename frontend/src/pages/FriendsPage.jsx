import { useQuery } from "@tanstack/react-query";
import FriendCard from "../components/FriendCard";
import { getUserFriends } from "../lib/api"; // Reuse your existing function

const FriendsPage = () => {
  const {
    data: friends,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Friends</h1>

      {isLoading && (
        <div className="text-center text-base-content/70">Loading friends...</div>
      )}

      {isError && (
        <div className="text-center text-error">Failed to load friends 😢</div>
      )}

      {!isLoading && !isError && friends?.length === 0 && (
        <div className="text-center text-base-content/70 mt-10">
          You don’t have any friends yet.
        </div>
      )}

      {!isLoading && !isError && friends?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend._id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
