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

  const resetImageIndex = () => {
    dispatch({
      type: ACTIONS.RESET_IMAGE_INDEX,
    });
  };

  const provider = {
    ...globalState,
    changeImageIndex,
    resetImageIndex,
  };

  return provider;
};
export default useGlobalState;
