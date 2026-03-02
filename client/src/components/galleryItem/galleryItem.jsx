import './galleryItem.css';

const GalleryItem = ({item}) => {
  return (
    /**
     * calculates the no of rows each image spans
     * Ex: 1200/100 = 12 rows
     */
    <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(item.height/100)}`}}>
        <img src={item.media} alt="" />
    </div>
  )
}

export default GalleryItem;
