import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSuppliersAsync, deleteSupplierAsync } from '../action'

const renderRefactor = () => {
  let b= true
}

export default function SupList() {
  // const [suppliers, setSuppliers] = useState([])
  const dispatch = useDispatch();
  const { suppliers, loading } = useSelector((state) => state.supplierReducer);
  useEffect(() => {
    // cpnWillMount
    // getListSuppliers()
    dispatch(getSuppliersAsync());
  }, []);

  const getListSuppliers = () =>{
    //fetch(URL)
        //  .then -> json
        //  .then -> success ->setSuppliers(data)
        //  .catch -> error
  }

  return (
    <>
      {loading && <small className="text-danger">Loadding...</small>}
      <table className="table table-light table-responsive table-striped table-hover w-75 m-auto border border-secondary">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Branch</th>
            <th scope="col">Address</th>
            <th scope="col">{renderRefactor()}</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => {
            return (
              <tr key={supplier?.id}>
                <th scope="row">{supplier?.id}</th>
                <td>{supplier?.name}</td>
                <td>{supplier?.branch}</td>
                <td>{supplier?.address}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteSupplierAsync(supplier?.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
