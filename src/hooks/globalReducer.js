import { ACTIONS } from '../utils/constants';

export const globalReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.STEP_IMAGE: {
      state.currentImageIndex = changeImageIndex(payload.direction, state);
      return {
        ...state,
      };
    }

    case ACTIONS.RESET_IMAGE_INDEX: {
      return {
        ...state,
        currentImageIndex: 0,
        maxIndex: payload.maxIndex,
      };
    }

    default:
      return state;
  }
};

const changeImageIndex = (direction, { currentImageIndex, maxIndex }) => {
  const first = 0;
  const last = maxIndex;
  if (direction === 'N' && currentImageIndex === last) return first;
  if (direction === 'P' && currentImageIndex === first) return last;

  return direction === 'N' ? currentImageIndex + 1 : currentImageIndex - 1;
};
