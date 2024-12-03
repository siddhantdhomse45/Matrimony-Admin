
import "./list.css"
import Sidebar from "../../component/sidebar/Sidebar"
import Navbar from "../../component/navbar/Navbar"
import Datatable from "../../component/datatable/Datatable"

const List = () => {
  return (
    <div className="list1">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List
