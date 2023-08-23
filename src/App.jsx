import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UsersForm from "./Components/UsersForm";
import { EMPTY_FOR_VALUES } from "./shared/constants";
import UsersList from "./Components/UsersList";
import { IoMdAdd } from "react-icons/io";

const urlBase = "https://users-crud.academlo.tech/";

function App() {
  const [isShowModal, setisShowModal] = useState(false);
  const [users, setUsers] = useState([])
  const [isUpdateUser, setisUpdateUser] = useState(null)

  const handleUpdate=(user)=>{
    setisShowModal(true)
    setisUpdateUser(user)
  }

  const handleOpenModal=()=>{
    setisShowModal(true)
  }

  const getAllUsers = () => {
    axios
      .get(urlBase + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createMovie=(newUsers, reset)=>{
    axios
    .post(urlBase + "users/", newUsers)
    .then(() => {
      getAllUsers(),
      setisShowModal(false)
      reset(EMPTY_FOR_VALUES)
    })
    .catch((err) => console.log(err));
  }

  const deleteUser=(idUser)=>{
    axios
    .delete(urlBase + `users/${idUser}/`)
    .then(() => getAllUsers())
    .catch((err) => console.log(err));
  }

  const updateUser=(userUpdate, reset)=>{
    axios
    .patch(urlBase + `users/${isUpdateUser.id}/`, userUpdate)
    .then(() => {
      getAllUsers(),
      setisShowModal(false),
      reset(EMPTY_FOR_VALUES),
      setisUpdateUser(null)
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <body className="bg-[#FFE5E5] min-h-screen">
      <header className=" flex justify-between">
        <h2 className=" m-2 font-extrabold text-2xl">Users</h2>
        <button onClick={handleOpenModal} className=" flex justify-center items-center bg-black m-2 p-[1px] text-white rounded-md">
          <IoMdAdd/> Create user
        </button>
      </header>
      <main className=" flex flex-wrap justify-center m-2 items-center">
        <UsersForm isShowModal={isShowModal} setisShowModal={setisShowModal} createMovie=   {createMovie} isUpdateUser={isUpdateUser} updateUser={updateUser} setisUpdateUser={setisUpdateUser}/>
        <UsersList users={users} deleteUser={deleteUser} handleUpdate={handleUpdate}/>
      </main>

    </body>
  );
}

export default App;
