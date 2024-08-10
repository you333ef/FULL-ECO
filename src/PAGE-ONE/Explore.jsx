import React, { useState, useEffect } from 'react';
import './explore.css';
import { FaArrowLeft, FaArrowRight, FaHeart, FaEye, FaStar } from "react-icons/fa";
import cameraa from '../assets/EXPLORE/CAMERA.svg';
import CAR from '../assets/EXPLORE/CAR.svg';
import FOOD from '../assets/EXPLORE/FOODAnimals.svg';
import jackettt from '../assets/EXPLORE/JACKEET.svg';
import KOTSHE from '../assets/EXPLORE/KOTSHE.svg';
import LAPTOP from '../assets/EXPLORE/LABTOP.svg';
import MARHAM from '../assets/EXPLORE/MARHAM.svg';
import PLAYING from '../assets/EXPLORE/PLAYING.svg';
import TITLE from '../assets/EXPLORE/TITLE.svg';

const Explore = () => {
  const [isFoodFavorite, setIsFoodFavorite] = useState(false);
  const [isCameraFavorite, setIsCameraFavorite] = useState(false);
  const [isLaptopFavorite, setIsLaptopFavorite] = useState(false);
  const [isMarhamFavorite, setIsMarhamFavorite] = useState(false);
  const [isCarFavorite, setIsCarFavorite] = useState(false);
  const [isKotsheFavorite, setIsKotsheFavorite] = useState(false);
  const [isPlayingFavorite, setIsPlayingFavorite] = useState(false);
  const [isJacketFavorite, setIsJacketFavorite] = useState(false);

  useEffect(() => {
    setIsFoodFavorite(JSON.parse(localStorage.getItem('isFoodFavorite')) || false);
    setIsCameraFavorite(JSON.parse(localStorage.getItem('isCameraFavorite')) || false);
    setIsLaptopFavorite(JSON.parse(localStorage.getItem('isLaptopFavorite')) || false);
    setIsMarhamFavorite(JSON.parse(localStorage.getItem('isMarhamFavorite')) || false);
    setIsCarFavorite(JSON.parse(localStorage.getItem('isCarFavorite')) || false);
    setIsKotsheFavorite(JSON.parse(localStorage.getItem('isKotsheFavorite')) || false);
    setIsPlayingFavorite(JSON.parse(localStorage.getItem('isPlayingFavorite')) || false);
    setIsJacketFavorite(JSON.parse(localStorage.getItem('isJacketFavorite')) || false);
  }, []);

  const toggleFavorite = (favoriteState, setFavoriteState, storageKey) => {
    const newStatus = !favoriteState;
    setFavoriteState(newStatus);
    localStorage.setItem(storageKey, JSON.stringify(newStatus));
  };

  return (
    <div className="container mt-5">
      <div className="row RwwwRwww">
        <div className="col">
          <div className="RIGHT">
            <div className="">
              <img src={TITLE} alt="" className='Framme' />
              <h4 className='Best'>Explore Our Products</h4>
            </div>
          </div>
        </div>
        <div className="col d-block text-end" id='DIRECTIONS'>
          <button className="btn btn-outline-dark"><FaArrowLeft /></button>
          <button className="btn btn-outline-dark"><FaArrowRight /></button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src={FOOD} className="card-img-top d-block m-auto" alt="Product Image" />
            <div className="card-body">
              <h5 className="card-title">Breed Dry Dog Food</h5>
              <p className="card-text">$100</p>
              <p className="card-text"><FaStar /> 3.5 (35 reviews)</p>
              <div className="d-flex justify-content-between">
                <button
                  className={`btn ${isFoodFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => toggleFavorite(isFoodFavorite, setIsFoodFavorite, 'isFoodFavorite')}
                >
                  <FaHeart />
                </button>
                <button className="btn btn-outline-secondary"><FaEye /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src={cameraa} className="card-img-top d-block m-auto" alt="Product Image" />
            <div className="card-body">
              <h5 className="card-title">CANON EOS DSLR Camera</h5>
              <p className="card-text">$360</p>
              <p className="card-text"><FaStar /> 4.5 (95 reviews)</p>
              <div className="d-flex justify-content-between">
                <button
                  className={`btn ${isCameraFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => toggleFavorite(isCameraFavorite, setIsCameraFavorite, 'isCameraFavorite')}
                >
                  <FaHeart />
                </button>
                <button className="btn btn-outline-secondary"><FaEye /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src={LAPTOP} className="card-img-top d-block m-auto" alt="Product Image" />
            <div className="card-body">
              <h5 className="card-title">ASUS FHD Gaming Laptop</h5>
              <p className="card-text">$700</p>
              <p className="card-text"><FaStar /> 5.0 (325 reviews)</p>
              <div className="d-flex justify-content-between">
                <button
                  className={`btn ${isLaptopFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => toggleFavorite(isLaptopFavorite, setIsLaptopFavorite, 'isLaptopFavorite')}
                >
                  <FaHeart />
                </button>
                <button className="btn btn-outline-secondary"><FaEye /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src={MARHAM} className="card-img-top d-block m-auto" alt="Product Image" />
            <div className="card-body">
              <h5 className="card-title">Curology Product Set</h5>
              <p className="card-text">$500</p>
              <p className="card-text"><FaStar /> 4.0 (145 reviews)</p>
              <div className="d-flex justify-content-between">
                <button
                  className={`btn ${isMarhamFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => toggleFavorite(isMarhamFavorite, setIsMarhamFavorite, 'isMarhamFavorite')}
                >
                  <FaHeart />
                </button>
                <button className="btn btn-outline-secondary"><FaEye /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src={CAR} className="card-img-top d-block m-auto" alt="Product Image" />
            <div className="card-body">
              <h5 className="card-title">Kids Electric Car</h5>
              <p className="card-text">$960</p>
              <p className="card-text"><FaStar /> 5.0 (65 reviews)</p>
              <div className="d-flex justify-content-between">
                <button
                  className={`btn ${isCarFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => toggleFavorite(isCarFavorite, setIsCarFavorite, 'isCarFavorite')}
                >
                  <FaHeart />
                </button>
                <button className="btn btn-outline-secondary"><FaEye /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src={KOTSHE} className="card-img-top d-block m-auto" alt="Product Image" />
            <div className="card-body">
              <h5 className="card-title">Jr. Zoom Soccer Cleats</h5>
              <p className="card-text">$1160</p>
              <p className="card-text"><FaStar /> 5.0 (35 reviews)</p>
              <div className="d-flex justify-content-between">
                <button
                  className={`btn ${isKotsheFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => toggleFavorite(isKotsheFavorite, setIsKotsheFavorite, 'isKotsheFavorite')}
                >
                  <FaHeart />
                </button>
                <button className="btn btn-outline-secondary"><FaEye /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src={jackettt} className="card-img-top d-block m-auto" alt="Product Image" />
            <div className="card-body">
              <h5 className="card-title">Winter Jacket</h5>
              <p className="card-text">$120</p>
              <p className="card-text"><FaStar /> 4.5 (150 reviews)</p>
              <div className="d-flex justify-content-between">
                <button
                  className={`btn ${isJacketFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => toggleFavorite(isJacketFavorite, setIsJacketFavorite, 'isJacketFavorite')}
                >
                  <FaHeart />
                </button>
                <button className="btn btn-outline-secondary"><FaEye /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src={PLAYING} className="card-img-top d-block m-auto" alt="Product Image" />
            <div className="card-body">
              <h5 className="card-title">Gaming Console</h5>
              <p className="card-text">$450</p>
              <p className="card-text"><FaStar /> 4.0 (200 reviews)</p>
              <div className="d-flex justify-content-between">
                <button
                  className={`btn ${isPlayingFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                  onClick={() => toggleFavorite(isPlayingFavorite, setIsPlayingFavorite, 'isPlayingFavorite')}
                >
                  <FaHeart />
                </button>
                <button className="btn btn-outline-secondary"><FaEye /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
