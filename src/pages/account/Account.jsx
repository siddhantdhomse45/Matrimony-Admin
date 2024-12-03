import "./account.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import { useState } from "react";

const Account = () => {
  const [accountType, setAccountType] = useState("Admin"); // Admin or Customer
  const [adminAccounts, setAdminAccounts] = useState([
    {
      id: 1,
      name: "Admin 1",
      email: "admin1@example.com",
      phone: "+9123456789",
    },
    {
      id: 2,
      name: "Admin 2",
      email: "admin2@example.com",
      phone: "+9876543201",
    },
    {
      id: 3,
      name: "Admin 3",
      email: "admin3@example.com",
      phone: "+9679754321",
    },
  ]);
  const [customerAccounts, setCustomerAccounts] = useState([
    {
      id: 1,
      name: "Customer 1",
      email: "customer1@example.com",
      phone: "+1122334455",
    },
    {
      id: 2,
      name: "Customer 2",
      email: "customer2@example.com",
      phone: "+2233445566",
    },
  ]);

  const handleAccountTypeChange = (e) => setAccountType(e.target.value);

  const handleUpdateAdmin = (id) => {
    // Logic to update admin profile
    alert(`Update Admin with ID: ${id}`);
  };

  const handleDeleteAdmin = (id) => {
    // Logic to delete admin profile
    setAdminAccounts(adminAccounts.filter((admin) => admin.id !== id));
  };

  const handleDeactivateCustomer = (id) => {
    // Logic to deactivate customer
    alert(`Deactivate Customer with ID: ${id}`);
  };

  const handleViewCustomer = (id) => {
    // Logic to view customer details
    alert(`View Customer with ID: ${id}`);
  };

  return (
    <div className="accounts">
      <Sidebar />
      <div className="accountsContainer">
        <Navbar />
        <div className="top">
          <h1>Manage Accounts</h1>
          <div className="dropdown">
            <label>Select Account Type: </label>
            <select onChange={handleAccountTypeChange} value={accountType}>
              <option value="Admin">Admin</option>
              <option value="Customer">Customer</option>
            </select>
          </div>
        </div>
        <div className="bottom">
          {accountType === "Admin" && (
            <div className="adminAccounts">
              <h2>Admin Accounts</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {adminAccounts.map((admin) => (
                    <tr key={admin.id}>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>
                      <td>{admin.phone}</td>
                      <td>
                        <button
                          onClick={() => handleUpdateAdmin(admin.id)}
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteAdmin(admin.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {accountType === "Customer" && (
            <div className="customerAccounts">
              <h2>Customer Accounts</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customerAccounts.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                      <td>
                        <button
                          onClick={() => handleViewCustomer(customer.id)}
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleDeactivateCustomer(customer.id)}
                        >
                          Deactivate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
