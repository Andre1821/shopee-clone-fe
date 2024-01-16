import { useState } from 'react'
import '../style/Product.css'
import { useSelector } from 'react-redux'
import DetailProduct from './DetailProduct'


const Product = () => {

    const products = useSelector((state) => state.product.products)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const handleShowDetail = (product) => {
        console.log("Selected Product : ", product)
        setSelectedProduct(product)
        setShowDetail(true)
    }

    const handleCloseDetail = () => {
        setShowDetail(false)
    }

    return (
        <>
            <div className='container d-flex justify-content-center mt-4'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.map((product) => (
                        <div key={product.id} className="col">
                            <div className="card h-100" onClick={() => handleShowDetail(product)}>
                                <img src={product.img} className="card-img-top" alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Rp {product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DetailProduct
                product={selectedProduct}
                show={showDetail}
                handleClose={handleCloseDetail}
            />
        </>
    )
}

export default Product