import React from 'react';
import { Grid } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import '../scss/menu.scss';
const classNames = require('classnames');


export default (props) => {
    return (
        <div className='menubody'>
            <div className='heading'>
                <div className='btn'>
                    <div className={classNames('prev-btn', { disable: (() => props.currentIdx === 0 ? true : false)() })} onClick={() => props.onclicknextbtn()} onClick={() => props.onclickprevbtn()}></div>
                </div>
                <div className='tag'>
                    {props.data.map((item, idx) => {
                        var isCur = false;
                        var length = props.data.length;
                        if (props.currentIdx === idx) isCur = true;
                        var isVisiable = true;
                        return (
                            <div className={classNames('tag-product', { currentTag: isCur })}
                                onClick={(e) => props.handleClickTag(idx)}>
                                <div className='tag-img'>
                                </div>
                                <h3>{item.type}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className='btn'>
                    <div className={classNames('next-btn', { disable: (() => props.data.length - 1 === props.currentIdx ? true : false)() })} onClick={() => props.onclicknextbtn()}></div>
                </div>
            </div>
            <div className='content'>
                <h3 className='type'>{props.data.length != 0 && props.data[props.currentIdx].type}</h3>
                <div className='content-wrap'>
                    <Grid container spacing={0}>
                        {props.data.length != 0 && props.data[props.currentIdx].products.map((item, idx) => (
                            <Grid item xs={6} sm={4} lg={3} key={idx}>
                                <div className='product' onClick={() => props.openModal(idx)}>
                                    <div className='product-img'></div>
                                    <h3><span>{idx + 1}. </span>{item.name}</h3>
                                    <div className='product-wrap'>
                                        <span>{item.price}</span>
                                        <div className='btn-addCart' onClick={(e) => {
                                            e.stopPropagation();
                                            props.addToCart(1, props.currentIdx, idx);
                                        }}>
                                            <ShoppingCartOutlinedIcon className='addCart' />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div >
    )
}
