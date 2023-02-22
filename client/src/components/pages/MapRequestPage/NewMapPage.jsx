/* eslint-disable */
/* @ts-nocheck */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import { YMaps, Map, ObjectManager, Placemark } from "@pbe/react-yandex-maps";

// const Map = () => (
//   <YMaps>
//     <div>
//       My awesome application with maps!
//       <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
//     </div>
//   </YMaps>
// );

export default function NewMapPage() {
    const mapRef = useRef(null);
  const ymaps = useYMaps(["Map"]);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 10
    });
  }, [ymaps]);

  return <div ref={mapRef} style={{ width: "320px", height: "240px" }} />;
};
