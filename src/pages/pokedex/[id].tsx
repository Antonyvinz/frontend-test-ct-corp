import axiosRepository from "@/axiosRepository";
import Navbar from "@/components/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function PokemonDetail() {
  const [data, setData] = useState({} as any);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log(id);
    if (router.isReady) {
      // getData("https://pokeapi.co/api/v2/pokemon/" + id);
      getData(id);
    }
  }, [router.isReady]);

  const getData = async (link: any) => {
    await axiosRepository
      .getPokemonDetail("https://pokeapi.co/api/v2/pokemon/" + link)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  return (
    <div>
      <Navbar />
      Pokemon detail
      <div className="bg-slate-400 rounded text-white">
        Abilities
        {/* {data.abilities} */}
      </div>
    </div>
  );
}

export default PokemonDetail;
