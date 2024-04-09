import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/MyContext";
import { Loader } from '../../components/index'
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

const ProductInfo = () => {
    // Context and state variables
    const context = useContext(MyContext);
    const { loading, setLoading } = context;
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    // Function to fetch product information
    const productInfoFunction = async () => {
        setLoading(true);
        try {
            const productinfodata = await getDoc(doc(fireDB, 'products', id));
            const productinfo = productinfodata.data();
            setLoading(false);
            setProduct(productinfo)
        } catch (error) {
            toast.error('Product Not Found');
            setLoading(false);
        }
    }

    // Fetch product information on component mount
    useEffect(() => {
        productInfoFunction();
    }, [])

    return (
        <Layout>
            {/* Product Information Section */}
            <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
                { loading ? (
                    <div className="flex justify-center">
                        {/* Display loader if data is loading */}
                        <Loader />
                    </div>
                ) : (
                    <>
                        <div className="flex justify-center">
                            {/* Display loader if data is loading */}
                        </div>
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
                                            <div className="flex flex-wrap items-center mb-6">
                                                {/* Product Rating */}
                                                <ul className="flex mb-4 mr-2 lg:mb-0">
                                                    <li>
                                                        <a href="">
                                                            {/* Star Icon */}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                                viewBox="0 0 16 16"
                                                            >
                                                                {/* Star Path */}
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    {/* Repeat for other stars */}
                                                </ul>
                                            </div>
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
                                            <p>{product?.description} </p>
                                        </div>

                                        <div className="mb-6 " />
                                        <div className="flex flex-wrap items-center mb-6">
                                            {/* Add to Cart Button */}
                                            <button
                                                className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600  hover:bg-pink-600 hover:text-gray-100 rounded-xl"
                                                onClick={() => (navigate('/cartpage'))}
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </Layout>
    );
}

export default ProductInfo;
