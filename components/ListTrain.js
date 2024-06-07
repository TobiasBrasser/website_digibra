import React, { useState, useEffect } from 'react';
import Styles from '../components/ListTrain.module.css';
import trainData from '../public/data.json';

const ListTrain = () => {
  const [trains, setTrains] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedCount, setDisplayedCount] = useState(9);
  const [expandedInfo, setExpandedInfo] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setTrains(data);
        setExpandedInfo(new Array(data.length).fill(false));
      })
      .catch(error => console.error('Error loading data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowMore = () => {
    setDisplayedCount(prevCount => prevCount + 9);
  };

  const toggleExpandedInfo = (index) => {
    setExpandedInfo(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const filteredTrains = trains.filter(train =>
    train.Bezeichnung.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.Typ.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.Hersteller.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.Zugsgattung.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.Gruppe.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedTrains = filteredTrains.slice(0, displayedCount);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleSearchChange} 
        className={Styles.searchInput}
      />
      <div className={Styles.trainList}>
        {displayedTrains.map((train, index) => (
          <div key={index} className={Styles.trainCard}>
            <img className={Styles.trainImage} src={`/images/${train.Bild}`} alt={train.Bezeichnung} />
            <h2>{train.Bezeichnung}</h2>
            <div className={expandedInfo[index] ? Styles.expandedInfo : Styles.hidden}>
              <p><span className={Styles.label}>Typ:</span> {train.Typ}</p>
              <p><span className={Styles.label}>Hersteller:</span> {train.Hersteller}</p>
              <p><span className={Styles.label}>Zugsgattung:</span> {train.Zugsgattung}</p>
              <p><span className={Styles.label}>Gruppe:</span> {train.Gruppe}</p>
            </div>
            <button onClick={() => toggleExpandedInfo(index)} className={Styles.toggleButton}>
              {expandedInfo[index] ? 'Weniger anzeigen' : 'Mehr anzeigen'}
            </button>
          </div>
        ))}
      </div>
      {filteredTrains.length > displayedCount && (
        <button onClick={handleShowMore} className={Styles.showMoreButton}>Mehr Anzeigen</button>
      )}
    </div>
  );
};

export default ListTrain;
