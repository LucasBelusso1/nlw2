import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/43540240?s=460&u=9903549f57cc339459f8ad97d766c389a3089b3e&v=4" alt="Lucas Belusso" />
        <div>
          <strong>Lucas Belusso</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        diuashdiuashdiusahdiusahdiasdhasidhasidhasidhsaidhsadhasdhsaid2<br /><br />
    dhasdashdisahdaskdaskdjaskdjasbdjkasdbsakjdhajsdb
  </p>

      <footer>
        <p>preço/hora</p>
        <strong>R$ 20,00</strong>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
      Entrar em contato
    </button>
      </footer>
    </article>
  );
}

export default TeacherItem;