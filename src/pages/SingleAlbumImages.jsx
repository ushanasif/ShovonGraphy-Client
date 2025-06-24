import { useParams } from 'react-router-dom';
import { useImageFetchingContextHook } from '../contextApi/ImageFetchingProvider';

const SingleAlbumImages = () => {

  const { id } = useParams();
  const { albumsData } = useImageFetchingContextHook();

  const filterData = albumsData.find((val) => val._id === id);

  return (
     <>
          <div className="w-full px-20 pt-7 pb-40">
            <div className="grid grid-cols-3 gap-5">
              {filterData &&
                filterData.albumImages.map((val) => (
                  <div key={val._id} className="shadow-md">
                    <img src={val.imgUrl} alt="img" className="" />
                    
                  </div>
                ))}
            </div>
          </div>
        </>
  )
}

export default SingleAlbumImages