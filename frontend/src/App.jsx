import { Routes, Route } from "react-router-dom";

import { AuthProvider, AuthContext } from "./context/AuthProvider";
import { ProductProvider } from "./context/ProductProvider";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Container } from "./components/ui";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductFormPage } from "./pages/ProductFormPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Carrito } from "./pages/Carrito";
import { NotFound } from "./pages/NotFound";
import { useContext } from "react";
import { CartProvider } from "./context/CartProvider";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  const { isAuth, loading } = useContext(AuthContext);

  if (loading) return <h1>Cargando...</h1>;

  return (
    <>
      <ProductProvider>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <Container className="py-5">
              <Routes>
                <Route
                  element={
                    <ProtectedRoute
                      isAllowed={!isAuth}
                      redirectTo={"/products"}
                    />
                  }
                >
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/products/new" element={<ProductFormPage />} />
                  <Route
                    path="/products/:id/edit"
                    element={<ProductFormPage />}
                  />
                  <Route
                    path="/products/:id"
                    element={<ProductDetail />}
                  />
                  <Route path="/carrito" element={<Carrito />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </CartProvider>
        </AuthProvider>
      </ProductProvider>

      <Footer />
    </>
  );
}

export default App;
