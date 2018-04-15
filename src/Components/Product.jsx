import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        }
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }

    increaseQuantity() {

        this.setState({
            quantity: this.state.quantity + 1,
        });

        this.props.onChangeProductQuantity(this.props.product.price, "increase");
    }

    decreaseQuantity() {

        const iSProductQuantityPositive = this.state.quantity > 0;

        if (iSProductQuantityPositive) {
            this.setState({
                quantity: this.state.quantity - 1
            });
    
            this.props.onChangeProductQuantity(this.props.product.price, "decrease");
        } else {
            this.setState({
                quantity: 0
            });
        }

    }

    render() {  
        return (
            <div className="product">
                <div className="product-thumbnail">
                    <img src="http://via.placeholder.com/60x100" alt="Placeholder" />
                    <button className="button-delete">Xóa</button>
                </div>
                <div className="product-info">
                    <div className="product-name">
                        {this.props.product.name}
                    </div>
                    <div className="product-price price-amount">
                        {this.props.product.price} đ
                    </div>
                    <div className="product-bonus">
                        <ul>
                            <li>Phiếu mua hàng Apple Watch S3 GPS trị giá 1 triệu (không cộng nhiều phiếu trên 1 sản phẩm)</li>
                            <li>Giảm ngay 1 triệu khi mua online (áp dụng cho đơn hàng đặt và nhận hàng từ ngày 11 - 15/4)</li>
                        </ul>
                    </div>
                    <div className="product-discount">
                        Giảm
                        <span className="price-amount">1.000.000đ</span> còn 
                        <span className="price-amount"> 6.990.000đ</span>
                    </div>
                    <div className="product-color">
                        Màu: {this.props.product.color}
                    </div>
                    <div className="product-quantity">
                        <div className="btn-group">
                            <button onClick={this.increaseQuantity}>+</button>
                            <button>{this.state.quantity}</button>
                            <button onClick={this.decreaseQuantity}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;