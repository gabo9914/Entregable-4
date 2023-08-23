import UserCard from "./UserCard"

const UsersList = ({users, deleteUser, handleUpdate}) => {
  return (
    <section className=" text-black grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => <UserCard key= {user.id} user={user} deleteUser={deleteUser} handleUpdate={handleUpdate} />) }
    </section>
  )
}
export default UsersList