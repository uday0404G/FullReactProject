import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Like from './Like';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase'; // Make sure to adjust the path to your Firebase configuration

const SingPro = () => {
 
  const { id } = useParams(); // Extract the id from the URL parameters
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, [id]); // Dependency array includes id to re-fetch if id changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <div className='mt-5 border px-5 d-flex' style={{height:"90vh"}}>
      <div className="border h-100 p-5 d-flex justify-content-center align-items-center " style={{width:"60%"}}>
        <img src={product.image} className='img-fluid w-75 h-50' alt="" />
      </div>
      <div className="border p-4" style={{width:"40%",backgroundColor:"#fafafa"}}>

        <h3>{product.title}</h3>
        <div className='w-100 d-flex mt-4'>
          <p>REVIEWS(183)</p>
          <div data-rating="4.45" className="rates visible-inline-block line-height-10">
            <span className="fa fa-star margin-right-5 font-medium margin-top-0 margin-bottom-0 rate"></span>
            <span className="fa fa-star margin-right-5 font-medium margin-top-0 margin-bottom-0 rate"></span>
            <span className="fa fa-star margin-right-5 font-medium margin-top-0 margin-bottom-0 rate"></span>
            <span className="fa fa-star margin-right-5 font-medium margin-top-0 margin-bottom-0 rate"></span>
            <span className="fa fa-star margin-right-5 font-medium margin-top-0 margin-bottom-0 rate-5"></span>
          </div>
        </div>
        <div className='w-100 d-flex mt-5' style={{backgroundColor:'white'}}>
          <div className="h-50 p-5"><h1>
            ${product.price}</h1>
            </div>
          <div className="h-50 p-5">
          <div className="visible-sm-table-cell pdp-name-subcont sku-upsell-text padding-left-20-md width-50p-sm">
      <div className="price-includes font-small">
        <p className="text-uppercase">
          Zenni <span className="color-gray-darker font-bold">WOW price</span> includes:
        </p>
        <ul className="list-unstyled margin-bottom-0 margin-top-10">
          <li>
            <i className="fas fa-check font-smaller"></i>
            <span>High-quality frame</span>
          </li>
          <li>
            <i className="fas fa-check font-smaller"></i>
            <span>Basic prescription lenses*</span>
          </li>
          <li>
            <i className="fas fa-check font-smaller"></i>
            <span>Anti-scratch coating</span>
          </li>
          <li>
            <i className="fas fa-check font-smaller"></i>
            <span>UV protection</span>
          </li>
        </ul>
        <p className="font-italic font-smaller margin-top-10">
          *multifocal or readers lenses start at additional cost
        </p>
      </div>
    </div>
          </div>
        </div>
        <span>Pay over time with Paypal, Affirm or Afterpay.Learn More</span>
        <div className='mt-2'>
        <button type="button" class="btn  btn-block text-white btn-cta col-xs-10 w-100 col-centered margin-bottom-15-xs" id="btn-pdp-add-to-cart" style={{backgroundColor:"#007b8f"}}>Add to Cart</button>
        </div>
        <div className='mt-2'>
        <button class="btn btn-outline-success w-50 btn-actions btn-block btn-fav margin-bottom-15" type="button" aria-label="Add to favorite">
<span class="hidden-xs">ADD TO FAVORITES</span><i class="fa padding-left-10 fa-heart-o"></i>
</button>
<button class="btn btn-outline-success w-50 btn-block btn-fittingbox-view btn-actions margin-bottom-15 relative">TRY ON</button>
        </div>
      
      </div>


    </div>

    <div className="container-fluid my-5 border px-5 py-3" style={{backgroundColor:"#fafafa"}}>
      <h3 className='' style={{color:"#007b8f"}}>
      Description</h3>
      <p style={{width:"80%"}}>
        {product.description}
</p>
    </div>
    <h1 className="text-center">You Might Also Like</h1>
    <Like/>
    </>
  )
}

export default SingPro