import React, { useEffect, useState } from 'react'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import axios from 'axios'
const Add_Sport = () => {

    const [sportname, setsportname] = useState('');
    const [date, setdate] = useState('');
    const [month, setmonth] = useState('');
    const [address, setaddress] = useState('');
    const [description, setdescription] = useState([]);

    const btnhandle = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2000/sport', {
            sportname: sportname,
            date:date,
            month:month,
            address:address,
            description:description
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
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='sportname' value={sportname} onChange={(e) => { setsportname(e.target.value) }} placeholder="Event Name" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row clearfix">
                                        <div className="col-sm-3">
                                                <select onChange={(e) => { setdate(e.target.value) }} name='date' className="form-control show-tick">
                                                    <option disabled selected>- Date -</option>
                                                    <option disabled>Select Month</option>
                                                    <option value='1'>1</option>
                                                    <option value='2'>2</option>
                                                    <option value='3'>3</option>
                                                    <option value='4'>4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                    <option value='8'>8</option>
                                                    <option value='9'>9</option>
                                                    <option value='10'>10</option>
                                                    <option value='11'>11</option>
                                                    <option value='12'>12</option>
                                                    <option value='13'>13</option>
                                                    <option value='14'>14</option>
                                                    <option value='15'>15</option>
                                                    <option value='16'>16</option>
                                                    <option value='17'>17</option>
                                                    <option value='18'>18</option>
                                                    <option value='19'>19</option>
                                                    <option value='20'>20</option>
                                                    <option value='21'>21</option>
                                                    <option value='22'>22</option>
                                                    <option value='23'>23</option>
                                                    <option value='24'>24</option>
                                                    <option value='25'>25</option>
                                                    <option value='26'>26</option>
                                                    <option value='27'>27</option>
                                                    <option value='28'>28</option>
                                                    <option value='29'>29</option>
                                                    <option value='30'>30</option>
                                                    <option value='31'>31</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='address' value={address} onChange={(e) => { setaddress(e.target.value) }} placeholder="Event Address" />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <select onChange={(e) => { setmonth(e.target.value) }} name='month' className="form-control show-tick">
                                                    <option disabled selected>- Month -</option>
                                                    <option disabled>Select Month</option>
                                                    <option value='Jan'>January </option>
                                                    <option value='Feb'>February </option>
                                                    <option value='March'>March </option>
                                                    <option value='April'>April </option>
                                                    <option value='May'>May </option>
                                                    <option value='June'>June </option>
                                                    <option value='July'>July </option>
                                                    <option value='Aug'>August </option>
                                                    <option value='Sep'>September </option>
                                                    <option value='Oct'>October </option>
                                                    <option value='Nov'>November </option>
                                                    <option value='Dec'>December </option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='description' value={description} onChange={(e) => { setdescription(e.target.value) }} placeholder="Event Description" />
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

export default Add_Sport
