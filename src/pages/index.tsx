import axiosRepository from "@/axiosRepository";
import Pagination from "@/components/pagination";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // const [link, setLink] = useState("https://pokeapi.co/api/v2/pokemon");
  const [data, setData] = useState({} as any);
  // const [prevDisable, setPrevDisable] = useState(true);
  // const [nextDisable, setNextDisable] = useState(false);
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    getData("https://pokeapi.co/api/v2/pokemon");
  }, []);

  const getData = async (link: any) => {
    axiosRepository.getPokemonList(link).then((res) => {
      console.log(res.data);
      setData(res.data);
      setListPokemon(res.data.results);
    });
  };

  const nextPage = () => {
    data.next != null ? getData(data.next!) : null;
  };

  const prevPage = () => {
    data.previous != null ? getData(data.previous) : null;
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Pokedex
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div>
          List
          {listPokemon.map((pokemon: any) => {
            return (
              <div className="mb-3 bg-gray-500 text-white rounded p-2">
                <Link
                  // href={pokemon.url}
                  href={"/pokedex/" + pokemon.url.match(/\/(\d+)\/$/)[1]}
                  key={pokemon.url.match(/\/(\d+)\/$/)[1]}
                >
                  <h3>{pokemon.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
        <Pagination
          next={nextPage}
          prev={prevPage}
          // nextDisable={nextDisable}
          // prevDisable={prevDisable}
        />
      </div>
    </div>
  );
}
