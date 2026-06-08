import React from 'react';
import './ExperimentFilter.css';

// Компонент фильтрации по статусу
const ExperimentFilter = ({ selectedStatus, onStatusChange }) => {
  const statuses = ['Все', 'План', 'В процессе', 'Завершён'];

  return (
    <div className="filter-container">
      <label>🔍 Фильтр по статусу:</label>
      <div className="filter-buttons">
        {statuses.map(status => (
          <button
            key={status}
            className={`filter-btn ${selectedStatus === status ? 'active' : ''}`}
            onClick={() => onStatusChange(status)}
          >
            {status === 'Все' && '📋 Все'}
            {status === 'План' && '📋 План'}
            {status === 'В процессе' && '⚙️ В процессе'}
            {status === 'Завершён' && '✅ Завершён'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExperimentFilter;