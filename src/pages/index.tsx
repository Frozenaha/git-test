import styles from './index.less';
import Lottie from 'react-lottie';
import * as header from '@/static/heart';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

export default function IndexPage() {
  const [state, setState] = useState({
    isStopped: false,
    isPaused: true,
  });
  const loadingPosition = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: '-250px',
    marginTop: '-250px',
    zIndex: 999,
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: header.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={loadingPosition}
        direction={50}
        isStopped={state.isStopped}
        isPaused={state.isPaused}
      />

      <Button
        onClick={() => {
          setState((d) => ({
            ...d,
            isStopped: false,
            isPaused: !d.isPaused,
          }));
        }}
      >
        开始
      </Button>
    </div>
  );
}
