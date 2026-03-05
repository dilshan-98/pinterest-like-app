import { Link } from "react-router";
import './galleryItem.css';

const GalleryItem = ({item}) => {
  return (
    /**
     * calculates the no of rows each image spans
     * Ex: 1200/100 = 12 rows
     */
    <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(item.height/100)}`}}>
        <img src={item.media} alt="" />
        <Link to={`/pin/${item.id}`} className="overlay" />
        <button className="saveButton">Save</button>
        <duv className="overlayIcons">
          <button>
            <img src="/general/share.svg" alt="" />
          </button>
          <button>
            <img src="/general/more.svg" alt="" />
          </button>
        </duv>
    </div>
  )
}

export default GalleryItem;
