import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const { user } = useContext(AuthContext);
  const { Firebase } = useContext(FirebaseContext);
  const date = new Date();
  const history = useHistory();

  const handleSubmit = () => {
    if (!name || !category || !price || !image) {
      toast.error('Please fill in all fields.');
      return;
    }

    Firebase.storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          Firebase.firestore()
            .collection('products')
            .add({
              name,
              category,
              price,
              imageURL: url,
              userId: user.uid,
              createdAt: date.toDateString(),
            })
            .then(() => {
              history.push('/');
            })
            .catch((error) => {
              toast.error('Error adding product to the database.');
              console.error('Error adding product:', error);
            });
        });
      })
      .catch((error) => {
        toast.error('Error uploading image.');
        console.error('Error uploading image:', error);
      });
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <label htmlFor="fname">Name</label>
        <br />
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="fname"
          name="Name"
          defaultValue="John"
        />
        <br />
        <label htmlFor="fname">Category</label>
        <br />
        <input
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          id="fname"
          name="category"
          defaultValue="John"
        />
        <br />
        <label htmlFor="fname">Price</label>
        <br />
        <input
          className="input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="fname"
          name="Price"
        />
        <br />
        <br />
        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ''}
        ></img>
        <br />
        <input onChange={(e) => setImage(e.target.files[0])} type="file" />
        <br />
        <button onClick={handleSubmit} className="uploadBtn">
          Upload and Submit
        </button>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Create;
