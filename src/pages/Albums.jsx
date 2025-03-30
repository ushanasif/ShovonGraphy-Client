import { Link } from "react-router-dom";
import { useImageFetchingContextHook } from "../contextApi/ImageFetchingProvider";

const Albums = () => {
  const { albumsData } = useImageFetchingContextHook();
  return (
    <div className="mt-14 pt-5 pb-40 px-4 rounded">
      <h1 className="text-center text-4xl text-rose-900 mb-20">
        Marriage Stories
      </h1>
      <div className="grid grid-cols-3 gap-6 gap-y-12">
        {albumsData?.map((val) => {
          return (
            <div
              key={val._id}
              className="rounded-md pb-10 flex flex-col"
            >
              <div>
                <Link to={val._id}>
                  <img src={val?.coverImg?.imgUrl} alt="image" />
                </Link>
              </div>
              <div className="myfont-thin italic flex justify-between mt-4 ml-4">
                <Link to={val._id}>
                  <h2 className="hover:opacity-75">{val?.albumName}</h2>
                </Link>
                <Link to={val._id}>view album </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
