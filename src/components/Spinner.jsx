import { ClipLoader } from 'react-spinners';

const style = {
    display: 'block',
    margin: '100px auto'
};
const Spinner = ({loading}) => {
  return (
    <div>
      <ClipLoader color='#4338ca' loading={loading} cssOverride={style} size={150}/>
    </div>
  )
}

export default Spinner
