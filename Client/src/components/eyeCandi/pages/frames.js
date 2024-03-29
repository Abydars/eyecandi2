import React, {Fragment, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Breadcrumb from '../../common/breadcrumb';
import {Grid, List, ChevronDown} from 'react-feather';
import banner from '../../../assets/images/ecommerce/banner.jpg';
import errorImg from '../../../assets/images/search-not-found.png';
import Modal from 'react-responsive-modal';
import {getColors, getVisibleproducts} from '../../../services/index';
import Carousal from '../../ecommerce-app/filters/carousal';
import AllFilters from '../../ecommerce-app/filters/allfilters';
import { filterBrand, filterColor, filterPrice } from '../../../actions/ecommerce.actions';


const FramesGallery = (props) => {

    const data = useSelector(content => content.data.productItems);
    const colors = getColors(data);
    const filters = useSelector(content => content.filters);
    const products = getVisibleproducts(data, filters);
    const symbol = useSelector(content => content.data.symbol);
    const searchProducts = useSelector(content => content.data.products);
    const dispatch = useDispatch();

    const [singleProduct, setSingleProduct] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [layoutColumns, setLayoutColumns] = useState(3);
    const [sidebaron, setSidebaron] = useState(true);
    const [stock, setStock] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [filterSidebar, setFilterSidebar] = useState(true);


    const onCloseModal = () => {
        setOpen(false)
    };

    useEffect(() => {
        dispatch({type: 'GET_LIST'})
    });

    const filterSortFunc = (event) => {
        dispatch({type: 'SORT_BY', sort_by: event})
    }
    const gridLayout = () => {
        document.querySelector(".product-wrapper-grid").classList.remove("list-view");
        var elems = document.querySelector(".gridRow").childNodes;
        [].forEach.call(elems, function (el) {
            el.className = '';
            el.classList.add('col-xl-3');
            el.classList.add('col-sm-6');
            el.classList.add('xl-4')
        });
    }
    //Grid Layout View
    const listLayout = () => {
        document.querySelector(".product-wrapper-grid").classList.add("list-view");
        var elems = document.querySelector(".gridRow").childNodes;
        [].forEach.call(elems, function (el) {
            el.className = '';
            el.classList.add('col-xl-12');
        });
    }

    // Layout Column View
    const LayoutView = (layoutColumns) => {
        if (!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
            var elems = document.querySelector(".gridRow").childNodes;
            [].forEach.call(elems, function (el) {
                el.className = '';
                el.classList.add('col-xl-' + layoutColumns);
            });
        }
    }

    const onClickDetailPage = (product) => {
        const id = product.id;
        props.history.push(`${process.env.PUBLIC_URL}/ecommerce/product-detail/${id}`)
    }

    const onClickFilter = () => {
        if (sidebaron) {
            setSidebaron(false)
            document.querySelector(".product-wrapper").classList.add('sidebaron');
        } else {
            setSidebaron(true)
            document.querySelector(".product-wrapper").classList.remove('sidebaron');
        }
    }

    const minusQty = () => {
        if (quantity > 1) {
            setStock('InStock')
            setQuantity(quantity - 1)
        }
    }

    const onOpenModal = (productId) => {
        setOpen(true);
        products.map((product, i) => {
            if (product.id === productId) {
                setSingleProduct(product)
            }
        })
    };

    const plusQty = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1)
        } else {
            setStock('Out of Stock !')
        }
    }

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const addcart = (product, qty) => {
        dispatch({type: 'ADD_TO_CART', payload: {product, qty}})
        props.history.push(`${process.env.PUBLIC_URL}/ecommerce/cart/${product.id}`);
    }

    const addWishList = (product) => {
        dispatch({type: 'ADD_TO_WISHLIST', payload: product});
        props.history.push(`${process.env.PUBLIC_URL}/ecommerce/wishlist/${product.id}`);
    }

    const handleSearchKeyword = (keyword) => {
        setSearchKeyword(keyword)
        dispatch({type: 'SEARCH_BY', search: keyword})
    }

    const colorHandle = (event, color) => {
        var elems = document.querySelectorAll(".color-selector ul li");
        [].forEach.call(elems, function (el) {
            el.classList.remove("active");
        });
        event.target.classList.add('active');
        filterColor(color);
    }

    return (
        <Fragment>
            <Breadcrumb title="Frames" parent="Dashboard" sub_title="Frames"/>
            <div className="container-fluid product-wrapper">
                <div className="product-grid">
                    <div className="feature-products">
                        <div className="row">
                            <div className="col-md-6 products-total mb-3">
                                <div className="square-product-setting d-inline-block">
                                    <a className="icon-grid grid-layout-view " onClick={gridLayout}
                                       data-original-title="" title="">
                                        <Grid/>
                                    </a>
                                </div>
                                <div className="square-product-setting d-inline-block">
                                    <a className="icon-grid m-0 list-layout-view" onClick={listLayout}
                                       data-original-title="" title="">
                                        <List/>
                                    </a>
                                </div>
                                <span className="d-none-productlist filter-toggle"
                                      onClick={() => setFilterSidebar(!filterSidebar)}>
                                  <h6 className="mb-0">Filters
                                      <span className="ml-2">
                                      <ChevronDown className="toggle-data"/>
                                    </span>
                                  </h6>
                                </span>
                                <div className="grid-options d-inline-block">
                                    <ul>
                                        <li>
                                            <a className="product-2-layout-view" onClick={() => LayoutView(6)}
                                               data-original-title="" title="">
                                                <span className="line-grid line-grid-1 bg-primary"></span>
                                                <span className="line-grid line-grid-2 bg-primary"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="product-3-layout-view" onClick={() => LayoutView(4)}
                                               data-original-title="" title="">
                                                <span className="line-grid line-grid-3 bg-primary"></span>
                                                <span className="line-grid line-grid-4 bg-primary"></span>
                                                <span className="line-grid line-grid-5 bg-primary"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="product-4-layout-view" onClick={() => LayoutView(3)}
                                               data-original-title="" title="">
                                                <span className="line-grid line-grid-6 bg-primary"></span>
                                                <span className="line-grid line-grid-7 bg-primary"></span>
                                                <span className="line-grid line-grid-8 bg-primary"></span>
                                                <span className="line-grid line-grid-9 bg-primary"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="product-6-layout-view" onClick={() => LayoutView(2)}
                                               data-original-title="" title="">
                                                <span className="line-grid line-grid-10 bg-primary"></span>
                                                <span className="line-grid line-grid-11 bg-primary"></span>
                                                <span className="line-grid line-grid-12 bg-primary"></span>
                                                <span className="line-grid line-grid-13 bg-primary"></span>
                                                <span className="line-grid line-grid-14 bg-primary"></span>
                                                <span className="line-grid line-grid-15 bg-primary"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="row">
                             <div className="col-sm-3">
                                <div className={`product-sidebar ${filterSidebar ? '' : 'open'}`}>
                                    <div className="filter-section">
                                        <div className="card">
                                            <div className="card-header">
                                                <h6 className="mb-0 f-w-600">Filters
                                                    <span className="pull-right">
                                                        <i className="fa fa-chevron-down toggle-data" onClick={onClickFilter}></i>
                                                    </span>
                                                </h6>
                                            </div>
                                            <div className="left-filter">
                                                <div className="card-body filter-cards-view animate-chk">
                                                    <AllFilters/>
                                                    <Carousal/>
                                                    {/*<div className="product-filter text-center">*/}
                                                    {/*        <img className="img-fluid banner-product" src={banner} alt=""*/}
                                                    {/*             data-original-title="" title=""/>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <form>
                                    <div className="form-group m-0">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="search"
                                            defaultValue={searchKeyword}
                                            onChange={(e) => handleSearchKeyword(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>

                            <div className="col-md-3 text-right">
                                {/*<span className="f-w-600 m-r-10">Showing Products 1 - 24 Of 200 Results</span>*/}
                                <div className="select2-drpdwn-product select-options">
                                    <select className="form-control" style={{height:'50px'}} onChange={(e) => filterSortFunc(e.target.value)}>
                                        <option value="">Sorting items</option>
                                        <option value="HighToLow">Price: High to Low</option>
                                        <option value="LowToHigh">Price: Low to High</option>
                                        <option value="Newest">Newest Items</option>
                                        <option value="AscOrder">Sort By Name: A To Z</option>
                                        <option value="DescOrder">Sort By Name: Z To A</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="product-wrapper-grid">
                        {searchKeyword.length > 0 ?
                            <div className="search-not-found text-center">
                                <div>
                                    <img className="img-fluid second-search" src={errorImg}/>
                                    <p>Sorry, We didn't find any results matching this search</p>
                                </div>
                            </div>
                            :
                            <div className="row gridRow">
                                {products ? products.map((item, i) =>
                                        <div
                                            className={`${layoutColumns === 3 ? 'col-xl-3 col-sm-6 xl-4 col-grid-box' : 'col-xl-' + layoutColumns}`}
                                            key={i}>
                                            <div className="card">
                                                <div className="product-box">
                                                    <div className="product-img text-center pt-4">
                                                        {(item.status === 'sale') ?
                                                            <span className="ribbon ribbon-danger">
                                                              {item.status}
                                                            </span> : ''}
                                                        {(item.status === '50%') ?
                                                            <span className="ribbon ribbon-success ribbon-right">
                                                              {item.status}
                                                            </span> : ''}
                                                        {(item.status === 'gift') ?
                                                            <span className="ribbon ribbon-secondary ribbon-vertical-left">
                                                              <i className="icon-gift">{item.status}</i>
                                                            </span> : ''}
                                                        {(item.status === 'love') ?
                                                            <span className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info">
                                                              <i className="icon-heart">{item.status}</i>
                                                             </span> : ''}
                                                        {(item.status === 'Hot') ?
                                                            <span className="ribbon ribbon ribbon-clip ribbon-warning">
                                                                  {item.status}
                                                            </span> : ''}
                                                        <img className="img-fluid" src={item.img} alt=""/>
                                                        <div className="product-hover">
                                                            <ul>
                                                                {/*<li>*/}
                                                                {/*    <button className="btn" type="button"*/}
                                                                {/*            onClick={() => addcart(item, quantity)}>*/}
                                                                {/*        <i className="icon-shopping-cart"></i>*/}
                                                                {/*    </button>*/}
                                                                {/*</li>*/}
                                                                <li>
                                                                    <button className="btn" type="button"
                                                                            data-toggle="modal"
                                                                            onClick={() => onOpenModal(item.id)}
                                                                            data-target="#exampleModalCenter">
                                                                        <i className="icon-eye"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button className="btn" type="button"
                                                                            onClick={() => addWishList(item)}>
                                                                        <i className="icon-heart"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-details">
                                                        <h6>
                                                            <a onClick={() => onClickDetailPage(item)}
                                                               className="font-secondary f-w-700">
                                                                {item.name}
                                                            </a></h6>

                                                        <p>CK4599</p>

                                                        {/*{item.colors}*/}
                                                        {/*<ul className="product-color m-t-15">*/}
                                                        {/*    <li className="bg-primary"></li>*/}
                                                        {/*    <li className="bg-secondary"></li>*/}
                                                        {/*    <li className="bg-success"></li>*/}
                                                        {/*    <li className="bg-info"></li>*/}
                                                        {/*    <li className="bg-warning"></li>*/}
                                                        {/*</ul>*/}

                                                        <div className="color-selector">
                                                            <ul>
                                                                {colors.map((color, i) => {
                                                                    return (
                                                                        <li className={color} key={i} title={color} onClick={(e) => colorHandle(e, color)}></li>
                                                                    )
                                                                })}

                                                            </ul>
                                                        </div>


                                                        {/*<div className="product-price">*/}
                                                        {/*    <del>*/}
                                                        {/*        {symbol} {item.discountPrice}*/}
                                                        {/*    </del>*/}
                                                        {/*        {symbol} {item.price}*/}
                                                        {/*</div>*/}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                ) : ''}
                                <Modal open={open} onClose={onCloseModal}>
                                    <div className="modal-body">
                                        <div className="product-modal row">
                                            <div className="product-img col-md-6">
                                                <img className="img-fluid" src={singleProduct.img} alt=""/></div>
                                            <div className="product-details col-md-6 text-left">
                                                <h3>{singleProduct.category}</h3>
                                                <div className="product-price">
                                                    <del>{symbol}{singleProduct.discountPrice}
                                                    </del>
                                                    {symbol}{singleProduct.price}
                                                </div>
                                                <div className="product-view">
                                                    <h6 className="f-w-600">Product Details</h6>
                                                    <p className="mb-0">{singleProduct.discription}</p>
                                                </div>
                                                <div className="product-size">
                                                    <ul>
                                                        <li>
                                                            <button className="btn btn-outline-light" type="button">M
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-outline-light" type="button">L
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="btn btn-outline-light" type="button">Xl
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product-qnty">
                                                    <h6 className="f-w-600">Quantity</h6>
                                                    <fieldset className="qty-box">
                                                        <div className="input-group">
                                                              <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-left-minus" onClick={minusQty}
                                                                        data-type="minus" data-field="">
                                                                  <i className="fa fa-minus"></i>
                                                                </button>
                                                              </span>
                                                            <input type="text" name="quantity" value={quantity}
                                                                   onChange={changeQty}
                                                                   className="form-control input-number"/>
                                                            <span className="input-group-append">
                                                                <button type="button" className="btn quantity-right-plus" onClick={plusQty}
                                                                        data-type="plus" data-field="">
                                                                  <i className="fa fa-plus"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </fieldset>
                                                    <div className="addcart-btn">
                                                        <button className="btn btn-primary m-r-10" type="button"
                                                                onClick={() => addcart(singleProduct, quantity)}>Add to
                                                            Cart
                                                        </button>
                                                        <button className="btn btn-success" type="button">View Details
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        }
                    </div>
                </div>
            </div>


        </Fragment>
    );
};

export default FramesGallery;