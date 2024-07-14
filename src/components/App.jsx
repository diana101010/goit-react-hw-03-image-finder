import React, { useState } from 'react';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Searchbar from './SearchBar';
import Modal from './Modal';
import axios from 'axios';
import { API_KEY, API_URL } from './API';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_URL}&q=${searchTerm}&page=${page}`
      );
      setImages(images => [...images, ...response.data.hits]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearch = query => {
    setImages([]);
    setPage(1);
    setSearchTerm(query);
  };

  const handleLoadMore = () => {
    fetchData();
  };

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={handleSearch} />

      {selectedImage && (
        <Modal imageUrl={selectedImage} closeModal={closeModal} />
      )}

      <ImageGallery images={images} />

      {loading && <Loader />}

      {images.length > 0 && <Button loadMore={handleLoadMore} />}
    </div>
  );
};

export default App;
