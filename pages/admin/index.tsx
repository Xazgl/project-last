import { NextPage } from "next"
import TableService  from "../../src/component/TableService"
import AdminLayout from "../../src/component/admin/AdminLayout"
import TableTradeIn from "../../src/component/TableTradeIn"
// import TableClientSales from "../../src/component/TableClientSales"


const  AdminTable: NextPage = () => {
    return (
      <>
        <AdminLayout title="Admin">
          {/* <TableService /> */}
          <TableTradeIn />
        </AdminLayout>
      </>
    )
  }
  
  export default AdminTable
  