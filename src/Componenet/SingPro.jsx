import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Like from './Like';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase'; // Adjust the path to your Firebase config
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCart } from '../Redux/Loginreducer/action';

const SingPro = () => {
  const { id } = useParams(); // Extract the id from the URL parameters
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const store=useSelector(state=>state);
  const dispatch=useDispatch()

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'Glassesdatabase', id); // Reference to the document
        const docSnap = await getDoc(docRef); // Fetch the document

        if (docSnap.exists()) {
          setProduct(docSnap.data()); // Set the product data
        } else {
          console.log('No such document!');
          setError('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
        setError('Failed to fetch product. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addtocart=()=>{
    const Uid = localStorage.getItem('Uid'); 
    if (Uid) {
      const cartItem = { ...product, userId: Uid };
      dispatch(AddtoCart(cartItem)); 
    } else {
      console.error('No user logged in!');
    }
  }
  console.log(store);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
 
  return (
    <>
      <div className="container-fluid mt-5 border px-5 d-flex flex-column flex-lg-row" style={{ minHeight: "90vh" }}>
        {/* Product Image Section */}
        <div className=" h-100    d-flex justify-content-center align-items-center col-12 col-lg-6 " style={{marginTop:"10pc",marginBottom:"10pc"}}>
          <img src={product.image} className="img-fluid w-75 w-sm-100  h-auto" alt={product.title} />
        </div>

        {/* Product Details Section */}
        <div className="border p-4 col-12 col-lg-6" style={{ backgroundColor: "#fafafa" }}>
          <h3>{product.title}</h3>
          <div className="w-100 d-flex align-items-center mt-4">
            <p className="me-3">REVIEWS (183)</p>
            <div data-rating="4.45" className="rates d-flex">
              <span className="fa fa-star me-1"></span>
              <span className="fa fa-star me-1"></span>
              <span className="fa fa-star me-1"></span>
              <span className="fa fa-star me-1"></span>
              <span className="fa fa-star-half-o"></span>
            </div>
          </div>

          {/* Pricing and Benefits */}
          <div className="d-flex flex-column flex-md-row justify-content-between mt-4">
            <div className="h-50 p-3">
              <h1>${product.price}</h1>
            </div>
            <div className="h-50 p-3">
              <div className="price-includes">
                <p className="text-uppercase">
                  Zenni <span className="fw-bold">WOW price</span> includes:
                </p>
                <ul className="list-unstyled">
                  <li><i className="fas fa-check"></i> High-quality frame</li>
                  <li><i className="fas fa-check"></i> Basic prescription lenses*</li>
                  <li><i className="fas fa-check"></i> Anti-scratch coating</li>
                  <li><i className="fas fa-check"></i> UV protection</li>
                </ul>
                <p className="fst-italic mt-2">
                  *Multifocal or readers lenses start at additional cost
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <span>Pay over time with Paypal, Affirm, or Afterpay. Learn More</span>
          <div className="mt-2">
            <button className="btn text-white w-100" onClick={addtocart} style={{ backgroundColor: "#007b8f" }}>
              Add to Cart
            </button>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <button className="btn btn-outline-success w-50">
              ADD TO FAVORITES <i className="fa fa-heart-o"></i>
            </button>
            <button className="btn btn-outline-success w-50">
              TRY ON
            </button>
          </div>
        </div>
      </div>

      
      <div className="container-fluid my-5 border px-5 py-3" style={{ backgroundColor: "#fafafa" }}>
        <h3 style={{ color: "#007b8f" }}>Description</h3>
        <p style={{ width: "80%" }}>{product.description}</p>
      </div>

      
      <h1 className="text-center">You Might Also Like</h1>
      <Like />
    </>
  );
}

export default SingPro;
