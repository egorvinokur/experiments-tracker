import React from 'react';
import './ExperimentStats.css';

// Компонент статистики
// completedCount — количество завершённых экспериментов
// totalCount — общее количество
const ExperimentStats = ({ completedCount, totalCount }) => {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <div className="stat-value">{totalCount}</div>
        <div className="stat-label">Всего экспериментов</div>
      </div>
      <div className="stat-card completed">
        <div className="stat-value">{completedCount}</div>
        <div className="stat-label">✅ Завершённых</div>
      </div>
    </div>
  );
};

export default ExperimentStats;