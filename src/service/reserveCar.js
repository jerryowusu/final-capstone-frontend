import axios from 'axios';

const url = 'http://127.0.0.1:3001/api/v1/reservation';

const postCar = async (data) => {
  const req = await axios.post(url, data);
  const res = req.data;
  return res;
};

export default postCar;
