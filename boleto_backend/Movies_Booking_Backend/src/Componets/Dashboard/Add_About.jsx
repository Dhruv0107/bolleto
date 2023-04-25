import React, { useEffect, useState } from 'react'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import axios from 'axios'
const Add_About = () => {

    const [name, setname] = useState('');
    const [teammember, setteammember] = useState('');
    const [description, setdescription] = useState('');

    const btnhandle = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2000/about', {
            name: name,
            teammember: teammember,
            description: description
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
            <Header />
            <Sidebar />
            {/* <RightSideBar /> */}
            <section className="content">
                {/* <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>Add Doctors
                                <small className="text-muted">Welcome to BoleTo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> BoleTo</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">About</a></li>
                                <li className="breadcrumb-item active">Add About</li>
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
                                                    <input type="text" className="form-control" name='name' value={name} onChange={(e) => { setname(e.target.value) }} placeholder="Sport Name" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row clearfix">

                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='description' value={description} onChange={(e) => { setdescription(e.target.value) }} placeholder="Sport Description" />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='teammember' value={teammember} onChange={(e) => { setteammember(e.target.value) }} placeholder="Sport Team Member" />
                                                </div>
                                            </div>


                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                    <div className="dz-message">
                                                        <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                        <h3>Drop files here or click to upload.</h3>
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

export default Add_About
