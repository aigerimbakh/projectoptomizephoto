import React, { useState, useEffect } from 'react';
import LazyImage from './LazyImage';
import { fetchImages } from './api';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(null);
  const [resourceTiming, setResourceTiming] = useState([]);

  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        const startTime = performance.now();
        const data = await fetchImages();
        const endTime = performance.now();
        setImages(data);
        setLoading(false);
        setLoadTime(endTime - startTime); // Время загрузки страницы в миллисекундах

        // Сбор данных о времени загрузки ресурсов с помощью Resource Timing API
        const resources = window.performance.getEntriesByType('resource');
        setResourceTiming(resources);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };
    fetchImagesData();
  }, []);

  return (
    <div className="app">
      <h1>Optimized Image Gallery</h1>
      {loadTime && <p>Время загрузки приложения: {loadTime.toFixed(2)} мс</p>} {/* Отображаем время загрузки страницы */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="image-grid">
            {images.map((image) => (
              <LazyImage
                key={image.id}
                src={image.urls.regular}
                alt={image.alt_description}
              />
            ))}
          </div>
          {/* Отображение данных о времени загрузки ресурсов */}
          <div className="resource-timing">
            <h2>Время загрузки ресурсов:</h2>
            <ul>
              {resourceTiming.map((resource, index) => (
                <li key={index}>
                  {resource.name}: {resource.duration.toFixed(2)} мс
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
