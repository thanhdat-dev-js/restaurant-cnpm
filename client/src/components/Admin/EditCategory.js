import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../../scss/clerk.scss';
import { Container } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

import verifyToken from '../../midlewares/verifyToken';
import getCategories from '../../midlewares/getCategories';

const SERVER = "http://localhost:4000/";

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleTimeString() + ' ' + new Date(dateString).toLocaleDateString();
}

export default function EditCategory() {

    const [data, setData] = useState(null);
    const history = useHistory();

    //?????????????????????????????????????????????????
    function getData() {
        var categories = getCategories();
        if (categories) {
            categories.then(res => {
                console.log(res.data)
                if (res.data.categories) {
                    setData([...res.data.categories]);
                }
            })
        }
    }

    useEffect(() => {
        const getInfo = verifyToken();
        if (getInfo) {
            getInfo.then(res => {
                if (res.data.permission !== 'admin') {
                    history.push("/login");
                }
                else {
                    getData();
                }
            })
        }
    }, []);

    return (
        <div className="clerk">
            <Container fluid='lg'>
                <div className='header'>
                    <Link to='/'>
                        <HomeIcon />
                        <span>Back to home</span>
                    </Link>
                </div>
                <div className='body'>

                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>ImgURL</th>
                            <th>Created At</th>
                            <th>Updated At</th>

                            <th>Update</th>
                            <th>Delete</th>
                        </tr>

                        {data && data.map((val, idx) => (
                            <tr>
                                <td>{idx}</td>
                                <td>{val.type}</td>
                                <td>{val.imgURL}</td>
                                <td>{formatDate(val.createdAt)}</td>
                                <td>{formatDate(val.updatedAt)}</td>

                                <td>
                                    <Button className='btn-modal'
                                        // disabled={val.status === 'cancel' || val.status === 'confirmed'}
                                        variant="contained" color="secondary"
                                        // onClick={() => handleClick('confirmed', val.orderID)}
                                    >Cập nhật</Button>
                                </td>
                                <td>
                                    <Button className='btn-modal'
                                        // disabled={val.status === 'cancel' || val.status === 'confirmed'}
                                        variant="contained" color="primary"
                                        // onClick={() => handleClick('cancel', val.orderID)}
                                    >Xoá</Button>
                                </td>

                            </tr>
                        )
                        )}
                    </table>
                </div>
            </Container>
        </div>
    )
}