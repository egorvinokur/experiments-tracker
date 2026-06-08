import React from 'react';
import './ExperimentCard.css';

// Компонент одной карточки эксперимента
// experiment — объект с данными (id, name, status)
// onDelete — функция для удаления
const ExperimentCard = ({ experiment, onDelete }) => {
  
  // Функция возвращает эмодзи в зависимости от статуса
  const getStatusEmoji = (status) => {
    switch(status) {
      case 'План': return '📋';
      case 'В процессе': return '⚙️';
      case 'Завершён': return '✅';
      default: return '📋';
    }
  };

  return (
    <div className={`experiment-card status-${experiment.status}`}>
      <div className="card-content">
        <h4>{experiment.name}</h4>
        <span className="status-badge">
          {getStatusEmoji(experiment.status)} {experiment.status}
        </span>
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDelete(experiment.id)}
      >
        🗑️
      </button>
    </div>
  );
};

export default ExperimentCard;