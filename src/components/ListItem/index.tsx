import React, { useState } from 'react';

/** Components */
import Modal from '../modals/Modal';

/** Type(s) */
import { ResultItem } from '../../@types/item.type';

interface ListItemProps {
  item: ResultItem;
}

const ListItem = ({ item }: ListItemProps) => {
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);

  const { data, links } = item;
  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={() => setIsOpenModal(false)}>
        <div className="child-modal-content info">
          <p className="title text-capitalize">{data[0].title}</p>
          <p className="description text-capitalize">{data[0].description}</p>
          <p className="id">Nasa ID: {data[0].nasa_id}</p>
        </div>
      </Modal>
      {links !== undefined && links[0].href && (
        <div className="card">
          <img src={links[0].href} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-capitalize">{data[0].title}</h5>
            <button
              type="button"
              onClick={() => setIsOpenModal(true)}
              className="btn modal-btn"
            >
              View Description
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListItem;
