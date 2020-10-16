import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getColors = () => {
  return axiosWithAuth()
    .get("api/colors")
    .then((res) => {
      console.log(res.data);
      return res;
    })
    .catch((err) => {
      return err;
    });
};
