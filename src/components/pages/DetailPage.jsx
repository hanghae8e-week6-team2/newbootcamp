import Layout from "../templates/Layout.js"
import Header from "../templates/Header.js";
import ReviewContent from '../../UI/atoms/reviewContent';
import ReplyContent from "../../UI/atoms/replyContent.jsx";
import {Nav} from 'react-bootstrap';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBoot} from "../../redux/modules/DetailSlice";

import {useParams} from "react-router-dom";


function DetailPage() {

    const dispatch = useDispatch();
    const bootList = useSelector((state) => state.detailSlice);

    

    const {id} = useParams();
    console.log(typeof id);

    useEffect(() => {
        dispatch(getBoot());
    }, []);

    return (
        <Layout>
            <Header/>
             {
                bootList.map((data) => {
                    if (data.bootcampId === Number(id)) {
                        return (
                        <div key={data.bootcampId} > 
                        < ReviewContent 
                        data = { data }
                        id = { data.bootcampId}
                       />  
                    <ReplyContent id={id}/>
                         
                        </div>)
                    }
                })
            }
          
          
        </Layout>
     
    );

}

export default DetailPage;
