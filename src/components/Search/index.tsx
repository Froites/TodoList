import React from 'react';
import styles from './styles.module.css';
import {PlusCircle} from '@phosphor-icons/react'

const Search: React.FC = () => {
  return (
    <form className={styles.search}>
        <input placeholder='Adicione uma nova tarefa' className={styles.searchBar}></input>
        <button type='submit' className={styles.searchButton}>
            Criar
            <PlusCircle className={styles.buttonAdd} size={16} />
        </button>
    </form>
  );
};

export default Search;