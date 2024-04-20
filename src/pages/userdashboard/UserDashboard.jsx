import React, { useContext, useEffect } from "react";
import { Button, Layout, Loader } from '../../components/index';
import MyContext from "../../context/MyContext";

const UserDashboard = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const context = useContext(MyContext);
    const { loading, userOrder, setUserOrder } = context; // Assuming setUserOrder is provided by MyContext

    useEffect(() => {
        localStorage.setItem('userOrder', JSON.stringify(userOrder));
    }, [userOrder])

    const handleDeleteOrders = () => {
        // Clear all orders without removing them from the collection
        setUserOrder([]);
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-5 lg:py-8">
                {/* Top  */}
                <div className="top">
                    {/* main  */}
                    <div className="bg-pink-50 py-5 rounded-xl border border-pink-100">
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        <div>
                            <h1 className="text-center text-lg"><span className="font-bold">Name :</span> {user?.name} </h1>
                            <h1 className="text-center text-lg"><span className="font-bold">Email :</span> {user?.email} </h1>
                            <h1 className="text-center text-lg"><span className="font-bold">Role :</span> {user?.role} </h1>
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>
                            <Button
                                type="button"
                                className="bg-red-800 hover:bg-red-300"
                                onClick={() => handleDeleteOrders()}
                            >
                                Delete Order
                            </Button>
                        </div>
                        <div className="flex justify-center">
                            {loading && <Loader />}
                        </div>
                        {userOrder.map((order, orderIndex) => {
                            const { id: orderId, date, status, cartItemsCopy: orderCartItemsCopy } = order;
                            return (
                                <div key={orderIndex}>
                                    <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
                                        <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                                            <div className="p-8">
                                                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                                    <div className="mb-4">
                                                        <div className="text-sm font-semibold text-black">Order Id</div>
                                                        <div className="text-sm font-medium text-gray-900">#{orderId}</div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="text-sm font-semibold">Date</div>
                                                        <div className="text-sm font-medium text-gray-900">{date}</div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="text-sm font-semibold">Total Amount</div>
                                                        <div className="text-sm font-medium text-gray-900">Rs.{orderCartItemsCopy.reduce((total, item) => total + item.price * item.quantity, 0)}</div>
                                                    </div>

                                                    <div className="mb-4">
                                                        <div className="text-sm font-semibold">Order Status</div>
                                                        <div className="text-sm font-medium text-green-800">{status}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            {orderCartItemsCopy.map((item, index) => (
                                                <div key={index} className="p-8">
                                                    <div className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                                        <div className="flex flex-1 items-stretch">
                                                            <div className="flex-shrink-0">
                                                                <img className="h-20 w-20 rounded-lg border border-gray-200 object-contain" src={item.productImageUrl} alt={item.productImageUrl} />
                                                            </div>

                                                            <div className="ml-5 flex flex-col justify-between">
                                                                <div className="flex-1">
                                                                    <p className="text-sm font-bold text-gray-900">{item.title}</p>
                                                                    <p className="mt-1.5 text-sm font-medium text-gray-500">{item.category}</p>
                                                                </div>

                                                                <p className="mt-4 text-sm font-medium text-gray-500">x {item.quantity}</p>
                                                            </div>
                                                        </div>

                                                        <div className="ml-auto flex flex-col items-end justify-between">
                                                            <p className="text-right text-sm font-bold text-gray-900">Rs.{item.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDashboard;
