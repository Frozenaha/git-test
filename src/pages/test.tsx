import { Modal } from 'antd';
import React, { useState } from 'react';

export default function ModalCom() {
  const [visible, setVisible] = useState(true);
  const open = () => {
    setVisible(true);
  };
  return (
    <div>
      <Modal
        title="ccc"
        visible={visible}
        onOk={() => {
          setTimeout(() => {
            setVisible(false);
          }, 4000);
        }}
      />
    </div>
  );
}
