import { useContext, useState, useEffect } from "react";
import MyContext from "../../context/MyContext";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import { useNavigate } from 'react-router-dom'

// List of available product categories
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
];

const UpdateProductPage = () => {

  const context = useContext(MyContext);
  const { loading, setLoading, getAllProductFunction } = context;
  const { id } = useParams();
  const navigate = useNavigate();

  // State to manage the edited product details
  const [ editProduct, setEditProduct ] = useState({
    title: '',
    price: '',
    productImageUrl: '',
    category: '',
    description: '',
    time: Timestamp.now(),
    date: new Date().toLocaleString('en-US',{
       month: "short",
       day: "2-digit",
       year: "numeric",
    })
  })

  // Function to fetch and populate product data for editing
  const editProductFunction = async () => {
    setLoading(true);
    try {
      const getProduct = await getDoc(doc(fireDB, 'products', id));
      const Productdata = getProduct.data();
      // Populate editProduct state with fetched product data
      setEditProduct({
        title: Productdata.title,
        price: Productdata.price,
        productImageUrl: Productdata.productImageUrl,
        category: Productdata.category,
        description: Productdata.description,
        time: Productdata.time,
        date: Productdata.date
      })
      setLoading(false);
      getAllProductFunction(); // This is done for to instantly update the product.

    } catch (error) {
      toast.error('Error');
      setLoading(false);
    }
  }

  // Function to update the product details
  const updateProductFunction = async () => {
    setLoading(true);
    try {
      // Update the product in the Firestore database
      await setDoc(doc(fireDB, 'products', id), editProduct);
      // Clear the editProduct state after updating
      setEditProduct({
        title: '',
        price: '',
        productImageUrl: '',
        category: '',
        description: ''
      })
      setLoading(false);
      toast.success('Product Edit Successfully');
      // Redirect to the admin dashboard after updating
      navigate('/admin-dashboard');

    } catch (error) {
      toast.error('Error');
      setLoading(false);
    }
  }

  // Fetch product data on component mount
  useEffect(() => {
    editProductFunction();
  }, [])

  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        { loading && <Loader /> }
        {/* Product Update Form */}
        <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
          {/* Form Heading */}
          <div className="mb-5">
            <h2 className='text-center text-2xl font-bold text-pink-500 '>
              Update Product
            </h2>
          </div>
          {/* Product Title Input */}
          <div className="mb-3">
            <input
              type="text"
              value= {editProduct.title}
              onChange= {(e) => (setEditProduct({
                ...editProduct,
                title: e.target.value
              }))}
              name="title"
              placeholder='Product Title'
              className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
            />
          </div>
          {/* Product Price Input */}
          <div className="mb-3">
            <input
              type="number"
              value= {editProduct.price}
              onChange= {(e) => (setEditProduct({
                ...editProduct,
                price: e.target.value
              }))}
              name="price"
              placeholder='Product Price'
              className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
            />
          </div>
          {/* Product Image URL Input */}
          <div className="mb-3">
            <input
              type="text"
              value= {editProduct.productImageUrl}
              onChange= {(e) => (setEditProduct({
                ...editProduct,
                productImageUrl: e.target.value
              }))}
              name="productImageUrl"
              placeholder='Product Image Url'
              className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
            />
          </div>
          {/* Product Category Selection */}
          <div className="mb-3">
            <select
              value= {editProduct.category}
              onChange= {(e) => (setEditProduct({
                ...editProduct,
                category: e.target.value
              }))}
              className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none  ">
              <option disabled>Select Product Category</option>
              {/* Populate product categories */}
              {categoryList.map((value, index) => {
                  const { name } = value
                  return (
                      <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                  )
              })}
            </select>
          </div>
          {/* Product Description Input */}
          <div className="mb-3">
            <textarea
              value= {editProduct.description}
              onChange= {(e) => (setEditProduct({
                ...editProduct,
                description: e.target.value
              }))}
              name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 ">
            </textarea>
          </div>
          {/* Update Product Button */}
          <div className="mb-3">
            <button
              onClick={updateProductFunction}
              type='button'
              className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md '
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProductPage;
