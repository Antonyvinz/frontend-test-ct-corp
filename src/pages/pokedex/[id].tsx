import axiosRepository from "@/axiosRepository";
import Navbar from "@/components/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function PokemonDetail() {
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      getData(id);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="max-w-4xl mx-auto">
      <Navbar />
      {loading ? null : (
        // for loading skeleton
        <>
          <div className="bg-slate-400 rounded text-white p-6">
            <div className="text-3xl mb-3">Pokemon Name : {data?.species?.name}</div>
            Abilities ({data?.abilities?.length}) :
            {data?.abilities?.map((item: any, index: any) => {
              return (
                <div>
                  {index + 1}. {item?.ability?.name}
                </div>
              );
            })}
            <div>List of Abilities</div>
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonDetail;
