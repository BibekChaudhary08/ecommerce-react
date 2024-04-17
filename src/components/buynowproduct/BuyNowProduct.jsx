import React, { useContext, useEffect, useState } from 'react';
import { Dialog, DialogBody, Button } from '@material-tailwind/react';
import { Input, Loader } from '../index';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import MyContext from '../../context/MyContext';
import { toast } from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom';

const BuyNowProduct = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const context = useContext(MyContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    const handleDialog = () => {
        setOpenDialog(!openDialog);
    };

    const [inputdetail, setInputDetail] = useState({
        name: '',
        address: '',
        pincode: '',
        mobile_no: '',
        status: 'confirmed',
        time: Timestamp.now(),
        date: new Date().toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        }),
    });

    const user = JSON.parse(localStorage.getItem('users'));

    const orderDetails = async () => {
        if (inputdetail.name === '' || inputdetail.address === '' || inputdetail.pincode === '' || inputdetail.mobile_no === '') {
            toast.error('All Fields are Required');
        } else {
            setLoading(true);
            try {
                const orderRef = collection(fireDB, 'orders');
                await addDoc(orderRef, inputdetail);
                setInputDetail({
                    name: '',
                    address: '',
                    pincode: '',
                    mobile_no: '',
                });
                toast.success('Order Placed Successfully'); // Display toast message after successfully placing the order
                setLoading();
                handleDialog(); // Close the dialog

            } catch (error) {
                toast.error('Error on order Placed.');
                setLoading(false);
            }
        }
    };
    

    return (
        <div>
            <Button onClick={() => handleDialog()}>Buy Now</Button>
            {loading && <Loader />}
            <Dialog open={openDialog} handleDialog={handleDialog}>
                <DialogBody>
                    <Input
                        placeholder="Enter Name"
                        value={inputdetail.name}
                        onChange={(e) => setInputDetail({ ...inputdetail, name: e.target.value })}
                    />
                    <Input
                        placeholder="Enter Address"
                        value={inputdetail.address}
                        onChange={(e) => setInputDetail({ ...inputdetail, address: e.target.value })}
                    />
                    <Input
                        placeholder="Enter Pincode"
                        value={inputdetail.pincode}
                        onChange={(e) => setInputDetail({ ...inputdetail, pincode: e.target.value })}
                    />
                    <Input
                        placeholder="Enter Mobile Number"
                        value={inputdetail.mobile_no}
                        onChange={(e) => setInputDetail({ ...inputdetail, mobile_no: e.target.value })}
                    />
                    <Button
                        onClick={() => {
                            handleDialog(); // Close the dialog
                            orderDetails(); // Process the order
                            navigate('/user-dashboard')
                        }}
                    >
                        Buy Now
                    </Button>
                </DialogBody>
            </Dialog>
        </div>
    );
};

export default BuyNowProduct;
