import { Link } from "react-router-dom";
import Button from "../button/Button";
import { useContext } from "react";
import MyContext from "../../context/MyContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { toast } from 'react-hot-toast'

const TotalProducts = () => {
    // Accessing context to get loading state and all products
    const context = useContext(MyContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

    const deleteProduct = async (id) => {
        setLoading(true);
          try {
            await deleteDoc(doc(fireDB, 'products', id));
            setLoading(false);
            getAllProductFunction();
            toast.success('Product delete Sucessfully');
          } catch (error) {
            toast.error('Error');
            setLoading(false);
          }

    }
    
    return (
        <div>
            {/* Heading and Add Product Button */}
            <div className="py-5 flex justify-between items-center">
                {/* Heading */}
                <h1 className="text-xl text-pink-300 font-bold">All Product</h1>
                {/* Add Product Button */}
                <Link to={'/addproduct-page'}>
                    <Button className="px-5 py-2 bg-pink-300 border border-pink-100 rounded-lg">Add Product</Button>
                </Link>
            </div>

            <div className="flex justify-center relative top-20">
                {loading && <Loader />}
            </div>

            {/* Product Table */}
            <div className="w-full overflow-x-auto mb-5">
                <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
                    <tbody>
                        {/* Table Header */}
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">Image</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Title</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Price</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Category</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Date</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Action</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        {/* Table Rows */}
                        {getAllProduct.map((item, index) => {
                            const { title, price, category, productImageUrl, date, id } = item;
                            return (
                                <tr key={index} className="text-pink-300">
                                    {/* Serial Number */}
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">
                                        {index + 1}.
                                    </td>
                                    {/* Product Image */}
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        <div className="flex justify-center">
                                            <img className="w-20" src={productImageUrl} alt="" />
                                        </div>
                                    </td>
                                    {/* Product Title */}
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {title}
                                    </td>
                                    {/* Product Price */}
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        Rs.{price}
                                    </td>
                                    {/* Product Category */}
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {category}
                                    </td>
                                    {/* Product Date */}
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                        {date}
                                    </td>
                                    {/* Edit Action */}
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer ">
                                    <Link to={`/updateproduct-page/${id}`}>
                                        Edit
                                    </Link>    
                                    </td>
                                    {/* Delete Action */}
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer "
                                     onClick={()=> deleteProduct(id)}
                                    >
                                        Delete
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TotalProducts;
