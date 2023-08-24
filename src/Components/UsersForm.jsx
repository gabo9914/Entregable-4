import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { EMPTY_FOR_VALUES } from "../shared/constants";

const UsersForm = ({ 
  isShowModal,  
  createUsers, 
  isUpdateUser,
  updateUser,
  setisShowModal,
  setisUpdateUser }) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (dataUsers) => {
    if(isUpdateUser){
      updateUser(dataUsers, reset)
    }
    else{
      createUsers(dataUsers, reset);
    }
  };

  const handleCloseShowModal=()=>{
    setisShowModal(false)
    reset(EMPTY_FOR_VALUES)
    setisUpdateUser(null)
  }

  useEffect(() => {
    if(isUpdateUser){
      reset(isUpdateUser)
    }
  }, [isUpdateUser])
  

  return (
    <section
      className={` fixed bg-black/60 top-0 right-0 bottom-0 left-0 flex justify-center items-center transition-[opacity_transform] duration-200 ${
        isShowModal
          ? " visible opacity-100 scale-100"
          : " invisible opacity-0 scale-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className=" bg-white grid gap-4 p-2 rounded-md relative"
      >
        <button
          type="button"
          onClick={handleCloseShowModal}
          className=" font-bold absolute top-1 right-2"
        >
          <IoIosCloseCircleOutline />
        </button>
        <h2 className=" text-center text-black"> {isUpdateUser ? "Editar Usuario" : "Crear Usuario"} </h2>
        <div className=" flex justify-around items-center  ">
          <label className=" w-[79px]" htmlFor="email">Email: </label>
          <input
            className=" outline-none border-[1px] p-1 border-black"
            id="email"
            type="text"
            {...register("email")}
          />
        </div>
        <div className=" flex justify-around items-center ">
          <label className=" w-[79px]" htmlFor="password">Password: </label>
          <input
            className=" outline-none border-[1px] p-1 border-black"
            id="password"
            type="password"
            {...register("password")}
          />
        </div>
        <div className=" flex justify-around items-center ">
          <label className=" w-[79px]" htmlFor="first_name">User: </label>
          <input
            className=" w-[93px] outline-none border-[1px] p-1 border-black"
            id="first_name"
            type="text"
            placeholder="First name"
            {...register("first_name")}
          />
          <input
            className=" w-[93px] outline-none border-[1px] p-1 border-black"
            id="last_name"
            type="text"
            placeholder="Last name"
            {...register("last_name")}
          />
        </div>
        <div className=" flex justify-around  items-center ">
          <label className=" w-[79px]" htmlFor="birthday">Birthday: </label>
          <input
            className=" w-[191px] h-[34px] outline-none border-[1px] p-1 border-black"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <button className=" bg-black border-[2px] p-2 text-white">
          {isUpdateUser ? "Guardar Cambios" : "Crear Usuario"}
        </button>
      </form>
    </section>
  );
};
export default UsersForm;
