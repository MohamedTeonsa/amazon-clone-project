import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/amazonSlice";
import { emptyCart } from "../assets";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total.toFixed(2));
  }, [products]);

  return (
    <div className="w-full bg-gray-100 p-2 xs:p-4">
      {products.length > 0 ? (
        <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-5 gap-4">
          {/* SECTION PRODUITS */}
          <div className="w-full bg-white px-2 xs:px-4 py-4 lg:col-span-4 rounded-lg shadow">
            <div className="flex flex-col xs:flex-row items-center justify-between border-b border-gray-300 pb-3">
              <h2 className="text-2xl xs:text-3xl font-semibold">Shopping Cart</h2>
              <h4 className="text-base xs:text-lg font-normal text-gray-600">Subtitle</h4>
            </div>

            <div className="mt-4 space-y-6">
              {products.map((item) => (
                <div
                  key={item._id}
                  className="w-full border-b border-gray-200 pb-4 flex flex-col sml:flex-row items-center gap-4"
                >
                  {/* IMAGE PRODUIT */}
                  {/* Ajustement: w-full sur mobile, w-1/5 à partir de md */}
                  <div className="w-full md:w-1/5 flex justify-center">
                    <img
                      className="h-40 md:h-52 object-contain rounded-md"
                      src={item.image}
                      alt="Product"
                    />
                  </div>

                  {/* DETAILS PRODUIT */}
                  {/* Ajustement: text-center sur mobile, text-left à partir de sml */}
                  <div className="w-full md:w-3/5 text-center sml:text-left">
                    <h2 className="font-semibold text-base xs:text-lg">{item.title}</h2>
                    <p className="text-sm text-gray-600 hidden sm:block">
                      {item.description.substring(0, 150)}...
                    </p>
                    <p className="text-sm xs:text-base mt-2">
                      Unit Price: <span className="font-semibold">${item.price}</span>
                    </p>

                    {/* QUANTITY */}
                    {/* Ajustement: justify-center sur mobile, justify-start à partir de sml */}
                    <div className="bg-gray-100 flex justify-center sml:justify-start items-center gap-2 w-28 py-1 mt-2 rounded-md shadow mx-auto sml:mx-0">
                      <p
                        onClick={() => dispatch(decrementQuantity(item._id))}
                        className="cursor-pointer bg-gray-200 px-2 rounded hover:bg-gray-400 duration-200"
                      >
                        -
                      </p>
                      <p>{item.quantity}</p>
                      <p
                        onClick={() => dispatch(incrementQuantity(item._id))}
                        className="cursor-pointer bg-gray-200 px-2 rounded hover:bg-gray-400 duration-200"
                      >
                        +
                      </p>
                    </div>

                    <button
                      onClick={() => dispatch(deleteItem(item._id))}
                      className="bg-red-500 w-full sml:w-36 py-1 rounded text-white mt-3 hover:bg-red-600 duration-300"
                    >
                      Delete Item
                    </button>
                  </div>

                  {/* TOTAL PAR PRODUIT */}
                  {/* Ajustement: justify-center sur mobile, justify-end à partir de sml */}
                  <div className="w-full sml:w-1/5 flex justify-center sml:justify-end">
                    <p className="text-base xs:text-lg font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOUTON CLEAR */}
            <div className="mt-6 flex justify-center sml:justify-start">
              <button
                onClick={() => dispatch(resetCart())}
                className="px-8 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-base xs:text-lg"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* SECTION RÉSUMÉ */}
          {/* Ajustement: h-auto sur mobile, h-52 à partir de lg */}
          <div className="w-full bg-white h-auto lg:h-52 rounded-lg shadow flex flex-col items-center justify-center p-4 gap-4">
            <div className="text-center text-sm xs:text-base">
              <CheckCircleIcon className="text-green-500 mb-1" />
              <p>
                Your order qualifies for <strong>FREE Shipping</strong>.
                Choose this option at checkout. See details...
              </p>
            </div>
            <p className="font-semibold text-base xs:text-lg">
              Total: <span className="font-bold">${totalPrice}</span>
            </p>
            <button className="w-full py-2 text-sm xs:text-base rounded-md bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:to-[#f0b94b] border border-yellow-600 active:border-yellow-800 active:shadow-inner">
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        // SI LE PANIER EST VIDE
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col items-center gap-6 py-10 px-4"
        >
          <img
            className="w-60 xs:w-72 sml:w-80 rounded-lg"
            src={emptyCart}
            alt="emptyCart"
          />
          <div className="w-full max-w-sm bg-white p-4 flex flex-col items-center rounded-md shadow">
            <h1 className="text-lg xs:text-xl font-bold mb-2">
              Your Cart feels lonely 
            </h1>
            <p className="text-sm text-center text-gray-600">
              Your shopping cart lives to serve. Fill it with amazing products and make it happy!
            </p>
            <Link to="/">
              <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 px-6 py-2 rounded-md font-semibold">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}