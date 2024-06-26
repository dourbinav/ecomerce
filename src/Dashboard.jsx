import React, { useEffect,  useState } from "react";
import axios from "axios";
import Card from "./Card";
import Navbar from "./Navbar";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setquery] = useState(0);

  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await products(0);
        setproduct(response.data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    if (!user || user === undefined) {
      navigate("/login");
    } else {
      fetchProducts();
    }
  }, [user, navigate]);

  if (!user) {
    navigate("/login");
  }

  const products = (skip) => {
    return axios.get(`https://dummyjson.com/products?limit=16&skip=${skip}`);
  };

  if (loading) {
    return <Loading />;
  }

  const Nextpage = async () => {
    setLoading(true);
    try {
      const response = await products(query + 16);
      setproduct(response.data.products);
      setquery(query + 16);
    } catch (err) {
      console.error("Error fetching next page:", err);
    } finally {
      setLoading(false);
    }
  };

  const Backpage = async () => {
    setLoading(true);
    try {
      const response = await products(query - 16);
      setproduct(response.data.products);
      setquery(query - 16);
    } catch (err) {
      console.error("Error fetching previous page:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="sm:m-6">
        <div className="flex grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 p-4">
          {product.map((p) => (
            <Card
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.thumbnail}
              description={p.description}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <button
            onClick={Backpage}
            className={`bg-black text-white p-1 rounded-md ${
              query < 16 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={query < 16}
          >
            &larr; Back
          </button>
          <button
            onClick={Nextpage}
            className={`bg-black text-white p-1 rounded-md ${
              query > 90 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={query > 90}
          >
            &rarr; Next
          </button>
        </div>
      </div>
    </>
  );
}
