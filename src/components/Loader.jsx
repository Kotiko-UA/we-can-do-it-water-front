import { RotatingLines } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '1000',
        background: '#fff',
      }}
    >
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
      />
    </div>
  );
};
