import React, { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";

const TotalOrders = () => {
    const context = useContext(MyContext);
    const { userOrder, setUserOrder } = context;

    const deleteUserOrder = (orderId) => {
        const updatedOrders = userOrder.filter(order => order.id !== orderId);
        setUserOrder(updatedOrders);
        localStorage.setItem("userOrders", JSON.stringify(updatedOrders));
    }

    useEffect(() => {
        const storedOrders = localStorage.getItem("userOrders");
        if (storedOrders) {
            setUserOrder(JSON.parse(storedOrders));
        }
    }, []);

    return (
        <div>
            <div className="py-5">
                <h1 className="text-xl text-pink-300 font-bold">All Orders</h1>
            </div>

            {userOrder.map((order, orderIndex) => {
                const { id: orderId, date, status, pincode, address, mobile_no, cartItemsCopy: orderCartItemsCopy, user } = order;

                return (
                    <div key={orderIndex} className="w-full overflow-x-auto">
                        {orderCartItemsCopy.map((item, index) => (
                            <div key={index}>
                                <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
                                    <tbody>
                                        <tr>
                                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
                                                S.No.
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Order Id
                                            </th>
                                            {/* Add other table headers */}
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Image
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Title
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Category
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Price
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Quantity
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Total Price
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Status
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Name
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Address
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Pincode
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Email
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Date
                                            </th>
                                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                                                Action
                                            </th>
                                        </tr>
                                        
                                        <tr className="text-pink-300">
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                                                {orderIndex + 1}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                                                {orderId}
                                            </td>
                                            {/* Render other table data */}
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                <img src={item.productImageUrl} alt='img' />
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                {item.title}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                {item.category}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                Rs.{item.price}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                {item.quantity}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                Rs.{item.price * item.quantity}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                {status}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                {user.name}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                {address}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                {pincode}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                {mobile_no}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                                {user.email}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                                                {date}
                                            </td>
                                            <td 
                                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 text-red-500 cursor-pointer"
                                                onClick={() => deleteUserOrder(orderId)}
                                            >
                                                Delete
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default TotalOrders;
