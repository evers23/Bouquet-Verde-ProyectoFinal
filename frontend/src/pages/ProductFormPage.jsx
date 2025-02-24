import { Card, Input, Label, Textarea, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";

export const ProductFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const { createProduct, updateProduct, loadProduct, errors: productsErrors } = useContext(ProductContext);
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    let product;

    if (!params.id) {
      product = await createProduct(data);
    } else {
      product = await updateProduct(params.id, data);
    }
    if (product) {
      navigate("/products");
    }
  });

  useEffect(() => {
    if (params.id) {
      loadProduct(params.id).then((product) => {
        setValue("title", product.title);
        setValue("description", product.description);
        setValue("image_url", product.image_url || "");
        setValue("price", product.price || "");
      });
    }
  }, []);

  return (
    <div className="flex h-[85vh] justify-center items-center">
      <Card>
        {productsErrors.map((error, i) => (
          <p className="text-red-500" key={i}>
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Editar producto" : "Crear producto"}
        </h2>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <Label htmlFor="title">Titulo</Label>
          <Input
            type="text"
            placeholder="Inserte Titulo"
            autoFocus
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && (
            <span className="text-red-500">Título es requerido</span>
          )}

          <Label htmlFor="image_url">Imagen</Label>
          <Input
            type="text"
            placeholder="Inserte imagen"
            {...register("image_url")}
          />

          <Label htmlFor="description"> Descripción </Label>
          <Textarea
            placeholder="Inserte Descripcion"
            rows={3}
            {...register("description")}
          ></Textarea>

          <Label htmlFor="price">Precio</Label>
          <Input
            type="text"
            placeholder="Inserte Precio"
            {...register("price")}
          />

          <Button>{params.id ? "Edit product" : "Crear producto"}</Button>
        </form>
      </Card>
    </div>
  );
};
