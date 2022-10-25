import request from '@/utils/request';

export const getData = async () => {
  const result = await request({
    url: '/get'
  });
  return result;
};
export const postData = async (params = {}) => {
  const result = await request({
    method: 'post',
    url: '/post',
    params
  });
  return result;
};
