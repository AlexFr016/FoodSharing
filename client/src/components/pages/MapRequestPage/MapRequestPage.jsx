/* eslint-disable */
/* @ts-nocheck */
import React, { useEffect } from 'react';
import { useAppSelector } from '../../../redux/hooks';

export default function MapRequestPage() {
  const requestsMap = useAppSelector((store) => store.request);
  console.log('hello',requestsMap);
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
      requestsMap.forEach((el) => {
        // const names = tea.filter((el1) => el1.place === el.place);
        ymaps
          .geocode(el.address, {
            results: 4,
          })
          .then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const coords = firstGeoObject.geometry.getCoordinates();
            const myPlacemark = new ymaps.Placemark(
              coords,
              {
                balloonContent: '',
              },
              {
                preset: 'islands#violetStretchyIcon',
              },
            );

            myMap.geoObjects.add(myPlacemark);
          });
      });
    }
    // `<p>Страна: ${el.place}</p>
    //                 <p>
    //                 <img style="height: 30px; width: 50px" src=${el.coordinates_x} />
    //                 </p>
    //                 Все чаи в этом месте: ${names
    //                   .map(
    //                     (el2) =>
    //                       `<div><a style="text-decoration: none; color: green" href=${`/cardMap/${el2.id}`}><img style="height: 15px; width: 15px" src="https://e7.pngegg.com/pngimages/542/627/png-clipart-share-icon-computer-icons-angle-text.png" /> ${
    //                         el2.name
    //                       }.</a></div>`,
    //                   )
    //                   .join('')}`,
  }, []);
  return <div id="map" style={{ minWidth: '900px', height: '700px' }} />;
}
