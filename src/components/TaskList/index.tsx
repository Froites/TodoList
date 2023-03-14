import { Trash } from '@phosphor-icons/react';
import React from 'react';
import Badge from '../Badge';
import styles from './styles.module.css';

const TaskList: React.FC = () => {
  return (
    <div className={styles.taskList}>
      <div className={styles.headerList}>
        <div className={styles.title}>
            <p>Tarefas criadas</p>
            <Badge content='5'/>
        </div>
        <div className={styles.completed}>
            <p>Concluídas</p>
            <Badge content='2 de 5' />
        </div>
      </div>
        
        <div className={styles.taskListContent}>
          <div className={styles.taskItem}>
            <input type='checkbox' />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={24} />
          </div>
          <div className={styles.taskItem}>
            <input type='checkbox' />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={24} />
          </div>
          <div className={styles.taskItem}>
            <input type='checkbox' />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={24} />
          </div>
        </div>
        
    </div>
  );
}

export default TaskList;