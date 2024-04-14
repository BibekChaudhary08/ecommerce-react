import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/MyContext";
import { Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteToCart } from "../../store/cartSlice";
import toast from "react-hot-toast";

const AllProduct = () => {
    const context = useContext(MyContext);
    const { loading, getAllProduct } = context;
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // Function to add item to cart
    const addToCartFunction = (item) => {
        dispatch(addToCart(item));
        toast.success("Product Added Successfully");
    }

    // Function to delete item from cart
    const deleteToCartFunction = (item) => {
        dispatch(deleteToCart(item));
        toast.success("Product Delete Successfully");
    }

    // Effect to update localStorage when cartItems change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <Layout>
            <div className="py-8">
                {/* Heading */}
                <div className="">
                    <h1 className="text-center mb-5 text-2xl font-semibold">All Products</h1>
                </div>

                {/* Main */}
                <section className="text-gray-600 body-font">
                    <div className="flex justify-center">
                        { loading && <Loader /> }
                    </div>
                    <div className="container px-5 lg:px-0 py-5 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {getAllProduct.map((item, index) => {
                                const { productImageUrl, title, price, id } = item
                                return (
                                    <div key={index} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={()=> navigate(`/productinfo/${id}`)}
                                                className="lg:h-80 h-96 w-full"
                                                src={productImageUrl}
                                                alt="blog"
                                            />
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                    E-bharat
                                                </h2>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    {title.substring(0, 25)}
                                                </h1>
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                    Rs.{price}
                                                </h1>

                                                <div className="flex justify-center">
                                                    {/* Conditional rendering of Add To Cart/Delete To Cart button */}
                                                    {cartItems.some((p) => p.id === item.id) ? 
                                                        <button className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                                onClick={() => deleteToCartFunction(item)}>
                                                            Delete To Cart
                                                        </button>
                                                        :
                                                        <button className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                                                onClick={() => addToCartFunction(item)}>
                                                            Add To Cart
                                                        </button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default AllProduct;
