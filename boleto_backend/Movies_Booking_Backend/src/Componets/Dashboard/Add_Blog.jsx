import React, { useState } from 'react'
import axios from 'axios'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import Header from './Header'
const Add_Blog = () => {

    const [blogname, setblogname] = useState('');
    const [addname, setaddname] = useState('');
    const [date, setdate] = useState('');
    const [view, setview] = useState('');
    const [description, setdescription] = useState('');
    const [adduserdescription,setadduserdescription] = useState('');

    const btnhandle = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2000/blog', {
            blogname: blogname,
            addname: addname,
            date: date,
            view: view,
            description: description,
            adduserdescription:adduserdescription
        })
            .then(function (response) {
                // handle success
                console.log(response);
                // window.location.href = "/Login"
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (

        <>
            <Sidebar />
            {/* <RightSideBar /> */}
            <Header />
            <section className="content">
                {/* <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>Add Sport
                                <small className="text-muted">Welcome to BoleTo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> BoleTo</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Sport</a></li>
                                <li className="breadcrumb-item active">Add Sport</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                                    <ul className="header-dropdown">
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <form method='post' id='form-admin' onSubmit={btnhandle}>
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='blogname' value={blogname} onChange={(e) => { setblogname(e.target.value) }} placeholder="Blog Blogname" />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='addname' value={addname} onChange={(e) => { setaddname(e.target.value) }} placeholder="Blog AddUser Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='adduserdescription' value={adduserdescription} onChange={(e) => { setadduserdescription(e.target.value) }} placeholder="Blog AddUser Description" />
                                                </div>
                                            </div>


                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="date" className="form-control" name='date' value={date} onChange={(e) => { setdate(e.target.value) }} placeholder="Blog Date" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='view' value={view} onChange={(e) => { setview(e.target.value) }} placeholder="Blog View" />
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='description' value={description} onChange={(e) => { setdescription(e.target.value) }} placeholder="Blog Description" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                    <div className="dz-message">
                                                        <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                        <h3>AddBlog Image</h3>
                                                        <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                    <div className="fallback">
                                                        <input name="file" id='img' type="file" multiple />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                    <div className="dz-message">
                                                        <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                        <h3>AddUser Image</h3>
                                                        <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                    <div className="fallback">
                                                        <input name="file" id='img' type="file" multiple />
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="col-sm-12">
                                                <input type="submit" className="btn btn-primary btn-round" value='Submit' />
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Add_Blog
