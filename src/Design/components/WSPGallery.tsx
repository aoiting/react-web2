import React, { useState, type Key } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import './WSPGallery.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0 
      ? setSlideNumber(galleryImages.length - 1) 
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
      ? setSlideNumber(0) 
      : setSlideNumber(slideNumber + 1);
  };
  
/*
  // Keyboard event handling
  React.useEffect(() => {
    if (!openModal) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal, slideNumber, galleryImages.length]);

*/

  React.useEffect(() => {
    if (!openModal) return; // Only add event listeners when modal is open

    const handleKeyDown = (e) => {
if (e.key === 'Escape') {
      handleCloseModal();
    } else if (e.key === 'ArrowLeft') {
      setSlideNumber(prev =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    } else if (e.key === 'ArrowRight') {
      setSlideNumber(prev =>
        prev + 1 === galleryImages.length ? 0 : prev + 1
      );
    }
  };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener on unmount or when modal closes
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal, galleryImages.length]);



  return (
    <div>
      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose fa-2xl' onClick={handleCloseModal} />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev fa-2xl' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext fa-2xl' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />

                  <div className='modalContent'>
               <h3>{galleryImages[slideNumber].title}</h3>
            <p>{galleryImages[slideNumber].description}</p>
            </div>
          </div>
        </div>
      }

      <div className='galleryWrap'>
        <ImageList sx={{ width: '100%', height: 'auto' }}>
            {galleryImages.map((item: GalleryImage, index: number) => (
            <ImageListItem key={item.img} className="image-list-item" onClick={() => handleOpenModal(index)}>
              <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              />
              <ImageListItemBar
              title={<span className="custom-title">{item.title}</span>}
              subtitle={<span className="custom-subtitle">{item.description}</span>}
              position="below"
              />
            </ImageListItem>
            ))}
        </ImageList>
      </div>
    </div>
  );
};

export default WSPGallery;