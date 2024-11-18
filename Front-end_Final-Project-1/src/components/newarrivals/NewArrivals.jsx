import './newarrivals.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
const NewArrivals=()=>{
    return(<>
    <div className="arrivals-container">
      <h3 className="arrivals-title">New Arrivals</h3>
      <div className="arrivals-cards-container">
          <div className="arrivals-card">
            <div className="arrivals-img-container">
              <img src="/bag.jpeg"/>
            </div>
            <div className="card-info-container-arrivals">
              <div className="card-title-container">
                <h3 className="product-name">aaaaaa</h3>
                <FavoriteIcon/>
              </div>
              <div className="rate-author-container">
                <div className="price">
                    34.56$
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>)
}
export default NewArrivals