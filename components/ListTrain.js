import React, { useState, useEffect } from 'react';
import Styles from '../components/ListTrain.module.css';

const ListTrain = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setTrains(data))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  return (
    <div className={Styles.train_list}>
      {trains.map((train, index) => (
        <div key={index} className={Styles.train_card}>
          <img className={Styles.trainImage} src={`/images/${train.Bild}`} alt={train.Bezeichnung} />
          <h2>{train.Bezeichnung}</h2>
          <p><span className={Styles.label}>Typ:</span> {train.Typ}</p>
          <p><span className={Styles.label}>Hersteller:</span> {train.Hersteller}</p>
          <p><span className={Styles.label}>Zugsgattung:</span> {train.Zugsgattung}</p>
          <p><span className={Styles.label}>Gruppe:</span> {train.Gruppe}</p>
        </div>
      ))}
    </div>
  );
};

export default ListTrain;
