import { Card, Input, Button, Label, Container } from "../components/ui";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import { useContext} from "react";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors } = useContext(AuthContext);
  const navigate = useNavigate();
 
  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);

    if (user) navigate("/products");
  });

  return (
    <Container className="h-[calc(100vh-10rem)] flex justify-center items-center">
      <Card>
        {loginErrors &&
          loginErrors.map((err) => (
            <p className="text-red-500 text-center">{err}</p>
          ))}

        <h1 className="text-4xl font-bold my-2 text-center">Iniciar sesión</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Correo</Label>
          <Input
            type="email"
            placeholder="Correo"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500"> El correo es requerido </p>}

          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerido </p>
          )}

          <Button>Iniciar sesión</Button>
          <div className="bg-red-200 border-t-2 mt-10">
            <p className="mr-4">¿No tienes una cuenta?</p>
            <Link to="/register" className="font-bold">
              ¡Regístrate!
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
};
