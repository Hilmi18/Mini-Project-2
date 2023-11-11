import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CreatMenu from "../CreatMenu/CreatMenu";
import EditMenu from "../EditMenu/EditMenu";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaRegEdit, FaRegMoneyBillAlt } from "react-icons/fa";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [menus, setMenus] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [showCreatMenu, setShowCreatMenu] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [editMenuId, setEditMenuId] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const navigate = useNavigate();

  const getMenus = () => {
    axios
      .get(
        `https://api.mudoapi.tech/menus?perPage=6&page=${currentPage}&name=${search}`
      )
      .then((res) => {
        console.log(res);
        setMenus(res.data.data.Data);
        setCurrentPage(res.data.data.currentPage);
        setNextPage(res.data.data.nextPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOrder = (id) => {
    console.log(id);
    navigate(`/order/${id}`);
  };
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(`https://api.mudoapi.tech/menu/${id}`, config)
      .then((res) => {
        console.log(res);
        getMenus();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleShowCreatMenu = () => {
    setShowCreatMenu(true);
  };
  const handleHideCreatMenu = () => {
    setShowCreatMenu(false);
  };
  const handleShowEditMenu = (menu) => {
    setShowEditMenu(true);
    setEditMenuId(menu.id);
    setMenuData(menu);
  };
  const handleHideEditMenu = () => {
    setShowEditMenu(false);
  };

  useEffect(() => {
    getMenus();
  }, [search, currentPage, menus]);

  return (
    <div id="menuSection" className="min-h-[480px] sm:pt-5 pb-10">
      <div className=" container mx-auto min-h-[480px]">
        {showCreatMenu && (
          <CreatMenu show={showCreatMenu} onHide={handleHideCreatMenu} />
        )}
        {showEditMenu && (
          <EditMenu
            show={showEditMenu}
            onHide={handleHideEditMenu}
            id={editMenuId}
            menu={menuData}
          />
        )}

        <h2 className="capitalize font-semibold italic text-[40px] mb-2 pt-10 pl-4 leading-[1.1]">
          Menu That Keeps You Awake in Delight
        </h2>
        <div className="container p-4 mb-7 flex justify-between items-center">
          <input
            onChange={handleChangeSearch}
            className="p-2 px-5 sm:w-[265px] w-[200px] rounded-lg border border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
            type="text"
            placeholder="What do you want to eat today?"
          />
          <button
            onClick={handleShowCreatMenu}
            className="p-2 rounded-lg border bg-red-500 text-white font-bold hover:bg-red-600"
          >
            Add Menu
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {menus.map((item) => (
            <div className="p-4 mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.imageUrl}
                  alt=""
                  className=" h-64 rounded-2xl transform duration-200 hover:transform hover:scale-110 w-[350px] mx"
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <h3 className="\font-black text-[20px]">{item.name}</h3>
                <div>
                  <button
                    onClick={() => handleShowEditMenu(item)}
                    className="text-white mr-2 bg-blue-400 hover:bg-blue-500  p-2 rounded-md"
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-md"
                  >
                    <BsFillTrash3Fill />
                  </button>
                </div>
              </div>
              <p className="text-gray-500 -mt-2">{item.type}</p>
              <div className="\font-black mt-2 text-2xl flex items-center">
                <FaRegMoneyBillAlt className="text-lg mr-2 text-green-500" />$
                {item.price}
              </div>
              <div>
                <button
                  onClick={() => handleOrder(item.id)}
                  className="font-bold border border-red-500 px-4 mt-2 py-1 rounded-lg transform duration-200 bg-red-500 text-white hover:bg-red-600"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center ">
          <div className=" gap-5 mt-10 w-52 flex items-center justify-center border border-red-500 rounded-2xl">
            <div className=" p-2 w-20 flex items-center justify-center border-r border-red-500">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </div>
            <div className="text-2xl  rounded-[50%] flex items-center justify-center">
              <span>{currentPage}</span>
            </div>
            <div className="p-2 w-20 flex items-center justify-center border-l border-red-500">
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={nextPage === 0}
              >
                Next{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
