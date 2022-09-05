import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useVruttaContext } from "../hooks/useVruttaContext";
import Form from "./Form";

function Admin() {
  const { vruttaList, dispatch } = useVruttaContext();
  useEffect(() => {
    const fetchVruttaList = async () => {
      const response = await fetch("/api/vruttas");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_VRUTTA", payload: json });
      }
    };
    fetchVruttaList();
  }, []);

  return (
    <>
      <div className="Vrutta List">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sanskrit Name</th>
              <th>Explaination</th>
              <th>Charnakshar</th>
              <th>Gana</th>
              <th>Yati</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {vruttaList &&
              vruttaList.map((vrutta) => (
                <tr key={vrutta._id}>
                  <td>{vrutta.vrutta}</td>
                  <td>{vrutta.vruttasanskrit}</td>
                  <td>{vrutta.explaination}</td>
                  <td>{vrutta.charnakshar}</td>
                  <td>{vrutta.gana}</td>
                  <td>{vrutta.yati}</td>
                  <td>{vrutta.example}</td>
                  <td>
                    <button>delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Form />
        <Link to="/admin/form">
          <button className="buttoon">Add Entry</button>
        </Link>
      </div>
    </>
  );
}

export default Admin;
