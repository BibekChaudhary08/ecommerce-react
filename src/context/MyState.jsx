import React, { useState, useEffect } from 'react'
import MyContext from './MyContext'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

const MyState = ({children}) => {
  const [loading, setLoading] = useState(false);

  // Product State
  const [getAllProduct, setGetAllProduct] = useState([]);

  const getAllProductFunction = async () => {
    setLoading(true);
    try {
        const q = query(
            collection(fireDB, "products"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let productArray = [];
            QuerySnapshot.forEach((doc) => {
                productArray.push({ ...doc.data(), id: doc.id });
            });
            setGetAllProduct(productArray);
            setLoading(false);
        });
        return () => data;
    } catch (error) {
        toast.error('Error')
        setLoading(false);
    }
}

// My Order state
const [userOrder, setUserOrder] = useState([]);

const userOrderFunction = async () => {
    setLoading(true);
    try {
        const q = query(
            collection(fireDB, "orders"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let orderArray = [];
            QuerySnapshot.forEach((doc) => {
                orderArray.push({ ...doc.data(), id: doc.id });
            });
            setUserOrder(orderArray);
            setLoading(false);
        });
        return () => data;

    } catch (error) {
        toast.error('Error')
        setLoading(false);
    }
}


useEffect(() => {
    getAllProductFunction();
    userOrderFunction();
}, []);


return (
    <MyContext.Provider value={{
        loading,
        setLoading,
        getAllProduct,
        setGetAllProduct, 
        getAllProductFunction,
        userOrder,
        setUserOrder
    }}>
        {children}
    </MyContext.Provider>
)
}

export default MyState