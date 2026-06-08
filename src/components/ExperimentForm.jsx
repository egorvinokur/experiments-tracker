import React, { useState } from 'react';

// Компонент формы добавления эксперимента
// onAdd — функция, которая будет вызвана при добавлении
const ExperimentForm = ({ onAdd }) => {
  // Состояние для полей формы
  const [name, setName] = useState('');
  const [status, setStatus] = useState('План'); // Статус по умолчанию

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Отменяем перезагрузку страницы
    
    // Проверяем, что название не пустое
    if (name.trim()) {
      onAdd({ name: name.trim(), status });
      setName('');     // Очищаем поле названия
      setStatus('План'); // Сбрасываем статус
    }
  };

  return (
    <form className="experiment-form" onSubmit={handleSubmit}>
      <h3>🧪 Добавить эксперимент</h3>
      
      <div className="form-group">
        <input
          type="text"
          placeholder="Название эксперимента"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="План">📋 План</option>
          <option value="В процессе">⚙️ В процессе</option>
          <option value="Завершён">✅ Завершён</option>
        </select>
      </div>
      
      <button type="submit">➕ Добавить эксперимент</button>
    </form>
  );
};

export default ExperimentForm;