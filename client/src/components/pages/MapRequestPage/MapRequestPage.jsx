/* eslint-disable */
/* @ts-nocheck */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

export default function MapRequestPage() {
  const [point, setPoint] = useState([]);

  //   const map = new ymaps.Map('map', {
  //     center: [59.94, 30.32],
  //     zoom: 12,
  //     controls: ['zoomControl'],
  //     behaviors: ['drag']
  //   });

  // let placemark = new ymaps.Placemark([59.94, 30.32], {})

  // map.geoObjects.add(placemark)

  useEffect(() => {
    axios('/api/post')
      .then((res) => {
        setPoint(res.data);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map(
        'map',
        {
          center: [58.371298, 74.557849],
          zoom: 3,
        },
        {
          searchControlProvider: 'yandex#search',
        },
      );

      point?.forEach((el) => {
        ymaps
          .geocode(el.address, {
            results: 4,
          })
          .then((res) => {
            //console.log(res);
            const firstGeoObject = res?.geoObjects.get(0);
            //console.log(firstGeoObject);
            const coords = firstGeoObject?.geometry.getCoordinates();
            //console.log(coords);
            const placemark = new ymaps.Placemark(
              coords,
              {
                balloonContentBody: '<p>Hello<p/>',
              },
              {
                preset: 'islands#violetStretchyIcon',
              },
            );

            myMap?.geoObjects.add(placemark);
          });
      });
    }
  }, [point]);
  return <div id="map" style={{ minWidth: '900px', height: '700px' }} />;
}
