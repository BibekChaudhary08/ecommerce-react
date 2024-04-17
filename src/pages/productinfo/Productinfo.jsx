import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/MyContext";
import { Loader, Button } from '../../components/index'
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteToCart } from "../../store/cartSlice";

const ProductInfo = () => {
    // Context and state variables
    const context = useContext(MyContext);
    const { loading, setLoading } = context;
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('users'));

    // Function to fetch product information
    const getProductInfo = async () => {
        setLoading(true);
        try {
            const productData = await getDoc(doc(fireDB, 'products', id));
            const productInfo = {...productData.data(), id: productData.id};
            setLoading(false);
            setProduct(productInfo);
        } catch (error) {
            toast.error('Product Not Found');
            setLoading(false);
        }
    }

    const addToCartFunction = (item) => {
        if(user){
        dispatch(addToCart(item));
        toast.success('Product Added Successfully');
        }
        else{
            navigate('/login')
        }
    }

    const deleteToCartFunction = (item) => {
        dispatch(deleteToCart(item));
        toast.success('Product Deleted Successfully');
    }

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    

    // Fetch product information on component mount
    useEffect(() => {
        getProductInfo();
    }, []);

    return (
        <Layout>
            {/* Product Information Section */}
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                {loading ? (
                    <div className="flex justify-center">
                        {/* Display loader if data is loading */}
                        <Loader />
                    </div>
                ) : (
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-24 -mx-4">
                            {/* Product Image */}
                            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                <div className="">
                                    <div className="">
                                        {/* Conditionally render product image */}
                                        {product?.productImageUrl && (
                                            <img
                                                className="w-full lg:h-[39em] rounded-lg"
                                                src={product.productImageUrl}
                                                alt="Product Image"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Product Details */}
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <div className="mb-6 ">
                                        {/* Product Title */}
                                        <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                            {product?.title}
                                        </h2>
                                        {/* Product Price */}
                                        <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                            <span>Rs.{product?.price}</span>
                                        </p>
                                    </div>
                                    {/* Product Description */}
                                    <div className="mb-6">
                                        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                            Description :
                                        </h2>
                                        <p>{product?.description}</p>
                                    </div>
                                    {/* Add to Cart Button */}
                                    <div className="flex flex-wrap items-center mb-6">
                                        {cartItems.some((p) => p.id === product.id) ? 
                                        <>
                                            <Button
                                                onClick = {() => deleteToCartFunction(product)}
                                                className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600 hover:bg-pink-600 hover:text-gray-100 rounded-xl"
                                            >
                                                Delete to Cart
                                            </Button>
                                        </>
                                        :
                                        <>
                                             <Button
                                                onClick = {() => addToCartFunction(product)}
                                                className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600 hover:bg-pink-600 hover:text-gray-100 rounded-xl"
                                            >
                                                Add to Cart
                                            </Button>
                                        </>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Layout>
    );
}

export default ProductInfo;
