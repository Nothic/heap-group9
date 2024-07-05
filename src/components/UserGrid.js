import UserCard from './UserCard';

export default function UserGrid(){
    return (
      <div className="grid grid-cols-2 w-full gap-2 p-2">
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
      </div>
    );
}