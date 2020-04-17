export const createEpiRequest = (data) => {
  return {
    type: '@epi/CREATE_EPI_REQUEST',
    payload: { data },
  };
};

export const updateEpiRequest = (data) => {
  return {
    type: '@epi/UPDATE_EPI_REQUEST',
    payload: { data },
  };
};
