import { RotatingLines } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '300px' }}>
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