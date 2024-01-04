import { RotatingLines } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: '999',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
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
