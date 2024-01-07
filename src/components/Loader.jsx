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
        background: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%)',
        WebkitBackdropFilter: 'blur(11px)',
        backdropFilter: 'blur(11px)',
        zIndex: '999',
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
