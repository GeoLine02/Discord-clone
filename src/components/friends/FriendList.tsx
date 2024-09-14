import { people } from "@/mock/people";
import Friend from "./Friend";

const FriendList = () => {
  return (
    <div>
      {people.map((member) => (
        <Friend userID={member} key={member} />
      ))}
    </div>
  );
};

export default FriendList;
