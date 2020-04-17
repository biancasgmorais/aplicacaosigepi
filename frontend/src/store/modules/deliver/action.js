export const createDeliverRequest = (data) => {
  return {
    type: '@deliver/CREATE_DELIVER_REQUEST',
    payload: { data },
  };
};

export const updateDeliverRequest = (data) => {
  return {
    type: '@deliver/UPDATE_DELIVER_REQUEST',
    payload: { data },
  };
};
