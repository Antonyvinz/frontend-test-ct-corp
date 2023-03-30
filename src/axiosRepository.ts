import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "https://pokeapi.co/api/v2",
// });

const axiosRepository = {
  getPokemonList: (
    link: any
    // pagination: any
  ) =>
    axios.get(
      link
      // { params: pagination }
    ),
  getPokemonDetail: (link: any) => axios.get(link),
};

export default axiosRepository;
