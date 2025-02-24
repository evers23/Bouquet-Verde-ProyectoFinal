import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
    <h2>Perfil de Usuario</h2>
    <table className="profile-table">
      <tbody>
        <tr>
          <td>
            {user.gravatar && <img src={user.gravatar} alt="avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />}
          </td>
          <td>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Correo electrónico:</strong> {user.email}</p>
            <p><strong>Fecha de Registro:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};
