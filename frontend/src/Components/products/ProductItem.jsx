import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./product-item.css";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../redux/features/cartSlice";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const setItemToCart = () => {
    const cartItem = {
      product: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.images[0]?.url,
      stock: product?.stock,
      quantity: 1,
    };

    dispatch(setCartItem(cartItem));
    toast.success("Item added to Cart");
    // console.log("Cart item");
    // console.log(cartItem);
  };
  return (
    <section className="bg-transparent">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-light tracking-tight leading-none text-gray-900 md:text-5xl xl:text-5xl dark:text-white">
            {product.name}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-900 dark:text-gray-100 lg:mb-8 md:text-lg  line-clamp-[8]">
            {product.description}
          </p>
          <div className="card-body items-start p-0 my-3">
            {/* <div className="price flex justify-around items-start gap-4 w-40">
            <s className="text-2xl">₹{Math.ceil(product.price * 2)}</s>
            <p className="text-red-400 text-sm">₹{Math.ceil(product.price)}</p>
          </div> */}
            <div class="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p class="text-gray-600 dark:text-gray-300 font-bold text-sm ml-1">
              {product?.ratings}
              <span class="text-gray-500 dark:text-gray-400 font-normal ms-1">
                ({product?.numOfReviews} reviews)
              </span>
            </p>
          </div>
          </div>
          <div className="flex items-center justify-start space-x-4">
            <button
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              onClick={setItemToCart}
            >
              Add to Cart
            </button>
            <Link
              to={`products/${product._id}`}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 dark:text-gray-100 border border-gray-700  rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-300 dark:hover:bg-gray-700"
            >
              Know more
            </Link>
          </div>
        </div>
        <div className=" block lg:mt-0 lg:col-span-5 lg:flex my-4 overflow-hidden w-full md:max-w-lg">
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={50}
            slidesPerView={1}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.url}
                  alt={`Productimg ${index + 1}`}
                  className="rounded-box aspect-square object-cover overflow-hidden"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProductItem;
