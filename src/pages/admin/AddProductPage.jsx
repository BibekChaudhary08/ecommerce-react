import { Input, Button, Loader } from '../../components/index'
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";

// Define the category list
const categoryList = [
  {
      name: 'fashion'
  },
  {
      name: 'shirt'
  },
  {
      name: 'jacket'
  },
  {
      name: 'mobile'
  },
  {
      name: 'laptop'
  },
  {
      name: 'shoes'
  },
  {
      name: 'home'
  },
  {
      name: 'books'
  }
  ]

// Add Product Page Component
const AddProductPage = () => {
    // Access context and setLoading function from MyContext
    const context = useContext(MyContext);
    const { loading, setLoading } = context;

    // Initialize navigation
    const navigate = useNavigate();

    // Define product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    // Function to add a new product
    const addProductFunction = async () => {
        if (product.title === "" || product.price === "" || product.productImageUrl === "" || product.category === "" || product.description === "") {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product)
            toast.success("Product added successfully");
            navigate('/admin-dashboard');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Failed to add product");
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md w-full max-w-md">
                {/* Title */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-pink-500'>Add Product</h2>
                </div>
                {/* Product Title Input */}
                <div className="mb-3">
                    <Input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={(e) => {
                          setProduct({
                              ...product,
                              title: e.target.value
                          })
                      }}
                        placeholder='Product Title'
                        className='bg-pink-50 border text-black-300 border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-300'
                    />
                </div>
                {/* Product Price Input */}
                <div className="mb-3">
                    <Input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={(e) => {
                          setProduct({
                              ...product,
                              price: e.target.value
                          })
                      }}
                        placeholder='Product Price'
                        className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-300'
                    />
                </div>
                {/* Product Image URL Input */}
                <div className="mb-3">
                    <Input
                        type="text"
                        name="productImageUrl"
                        value={product.productImageUrl}
                        onChange={(e) => {
                          setProduct({
                              ...product,
                              productImageUrl: e.target.value
                          })
                      }}
                        placeholder='Product Image Url'
                        className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-full rounded-md outline-none placeholder-pink-300'
                    />
                </div>
                {/* Product Category Dropdown */}
                <div className="mb-3">
                    <select
                        value={product.category}
                        onChange={(e) => {
                          setProduct({
                              ...product,
                              category: e.target.value
                          })
                      }}
                        className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none">
                        <option disabled>Select Product Category</option>
                        {categoryList.map((value, index) => (
                            <option className="first-letter:uppercase" key={index} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                {/* Product Description Textarea */}
                <div className="mb-3">
                    <textarea
                        value={product.description}
                        onChange={(e) => {
                          setProduct({
                              ...product,
                              description: e.target.value
                          })
                      }}
                        name="description"
                        placeholder="Product Description"
                        rows="5"
                        className="w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300">
                    </textarea>
                </div>
                {/* Add Product Button */}
                <div className="mb-3">
                    <Button
                        onClick={addProductFunction}
                        type='button'
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md'>
                        Add Product
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;
