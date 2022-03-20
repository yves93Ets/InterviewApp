import { useContext } from 'react';
import { ACTIONS } from '../utils/constants';
import { GlobalContext } from './GlobalContext';

const useGlobalState = () => {
  const [globalState, dispatch] = useContext(GlobalContext);

  const changeImageIndex = (direction) => {
    dispatch({
      type: ACTIONS.STEP_IMAGE,
      payload: { direction },
    });
  };

  const provider = {
    ...globalState,
    changeImageIndex,
  };

  return provider;
};
export default useGlobalState;
