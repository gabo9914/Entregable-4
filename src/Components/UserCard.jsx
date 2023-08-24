import swal from "sweetalert";
import { MdDelete, MdModeEdit } from "react-icons/md";

const UserCard = ({ user, deleteUser, handleUpdate }) => {
  const alertDelete = () => {
    swal({
      title: "Eliminar",
      text: "Estás seguro de que deseas eliminar este usuario?",
      icon: "warning",
      buttons: ["No", "Sí"],
    }).then((respuesta) => {
      if (respuesta) {
        deleteUser(user.id);
        swal({
          text: `El usuario "${
            user.first_name + user.last_name
          }" ha sido eliminado con éxito`,
          icon: "success",
        });
      }
    });
  };

  return (
    <article className=" flex flex-col justify-around min-w-[280px] min-h-[130px] p-2 border-[1px] border-black rounded-md bg-[#FFBFBF]">
      <ul className=" flex flex-col gap-1">
        <li className=" text-center font-extrabold text-xl">
          {" "}
          {user.first_name + " " + user.last_name}
        </li>
        <li className=" font-medium flex gap-2 flex-wrap">
          <p className=" font-bold">Email:</p>
          <p>{user.email}</p>
        </li>
        <li className=" font-medium flex gap-2">
          <p className=" font-bold">Birthday:</p>
          <p>{user.birthday}</p>
        </li>
      </ul>
      <div className=" flex justify-end mb-1">
        <button
          onClick={alertDelete}
          className=" bg-[#f8aaaa] p-2 text-xl text-black rounded-sm"
        >
          <MdDelete />
        </button>
        <button
          onClick={() => handleUpdate(user)}
          className=" bg-[#f8aaaa] p-2 text-xl rounded-sm ml-1"
        >
          <MdModeEdit />
        </button>
      </div>
    </article>
  );
};
export default UserCard;
