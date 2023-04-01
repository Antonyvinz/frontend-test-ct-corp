import axiosRepository from "@/axiosRepository";
import Navbar from "@/components/header";
import Image from "next/image";
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
  // const toTitleCase = (str: any) => {
  //   return str.replace(/\w\S*/g, function (txt) {
  //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //   });
  // };

  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      {loading ? null : (
        // for loading skeleton
        <>
          <div className="bg-slate-400 rounded text-white p-6 capitalize mx-5">
            <div className="text-3xl mb-3">Pokemon Name : {data?.species?.name}</div>
            <div className="columns-2 md:columns-4">
              <Image
                className="w-full aspect-square"
                src={data?.sprites?.front_default}
                alt="Avatar"
                height={500}
                width={500}
                layout="responsive"
              />
              <Image
                className="w-full aspect-square"
                layout="responsive"
                src={data?.sprites?.front_shiny}
                alt="Avatar"
                height={500}
                width={500}
              />
              <Image
                className="w-full aspect-square"
                layout="responsive"
                src={data?.sprites?.back_default}
                alt="Avatar"
                height={500}
                width={500}
              />
              <Image
                className="w-full aspect-square"
                layout="responsive"
                src={data?.sprites?.back_shiny}
                alt="Avatar"
                height={500}
                width={500}
              />
            </div>
            <div className="columns-2 ">
              <div className="h-full">
                <div>
                  Types ({data?.types?.length}) :
                  {data?.types?.map((item: any, index: any) => {
                    return (
                      <div key={index} className="capitalize">
                        {index + 1}. {item?.type?.name}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 ">
                  Abilities ({data?.abilities?.length}) :
                  {data?.abilities?.map((item: any, index: any) => {
                    return (
                      <div key={index}>
                        {index + 1}. {item?.ability?.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-5 h-full">
                Stats ({data?.stats?.length}) :
                {data?.stats?.map((item: any, index: any) => {
                  return (
                    <div key={index}>
                      {index + 1}. {item?.stat?.name} : {item?.base_stat}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-5">
              Moves ({data?.moves?.length}) :
              <div className="columns-2 md:columns-3">
                {data?.moves?.map((item: any, index: any) => {
                  return (
                    <div key={index} className="w-auto">
                      {index + 1}. {item?.move?.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonDetail;
