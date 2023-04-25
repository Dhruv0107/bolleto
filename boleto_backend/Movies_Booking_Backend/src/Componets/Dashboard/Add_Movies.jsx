import React, { useEffect, useState } from 'react'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import axios from 'axios'
const Add_Movies = () => {

    const [moviename, setmoviename] = useState('');
    const [type, settype] = useState('');
    const [img, setimg] = useState('');
    const [date, setdate] = useState('');
    const [time, settime] = useState('');
    const [viewlike, setviewlike] = useState('');
    const [nasta, setnasta] = useState('');
    const [address, setaddress] = useState('');
    const [rating, setrating] = useState('');
    const [earning, setearning] = useState('');
    const [description, setdescription] = useState('');
    const [FormData, setFormData] = useState('');

    const btnhandle = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2000/', {
            moviename: moviename,
            type: type,
            img: img,
            date: date,
            time: time,
            viewlike: viewlike,
            nasta: nasta,
            earning: earning,
            address: address,
            rating: rating,
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
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Movies</a></li>
                                <li className="breadcrumb-item active">Add Movies</li>
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
                                                    <input type="text" className="form-control" name='moviename' value={moviename} onChange={(e) => { setmoviename(e.target.value) }} placeholder="Movie Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='type' value={type} onChange={(e) => { settype(e.target.value) }} placeholder="Type Name" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row clearfix">

                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="date" className="form-control" name='date' value={date} onChange={(e) => { setdate(e.target.value) }} />
                                                </div>
                                            </div>

                                            <div className="col-sm-3">
                                                <select onChange={(e) => { settime(e.target.value) }} value={time} name='nasta' className="form-control show-tick" >
                                                    <option selected>Time</option>
                                                    <option value='2 hrs 00 mins'>2 hrs 00 mins</option>
                                                    <option value='2 hrs 10 mins'>2 hrs 10 mins</option>
                                                    <option value='2 hrs 20 mins'>2 hrs 20 mins</option>
                                                    <option value='2 hrs 30 mins'>2 hrs 30 mins</option>
                                                    <option value='2 hrs 40 mins'>2 hrs 40 mins</option>
                                                    <option value='2 hrs 50 mins'>2 hrs 50 mins</option>
                                                    <option value='3 hrs 00 mins'>3 hrs 00 mins</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3">
                                                <select onChange={(e) => { settime(e.target.value) }} value={time} name='nasta' className="form-control show-tick" >
                                                    <option selected>Language</option>
                                                    <option value='English'>English</option>
                                                    <option value='Hindi'>Hindi</option>
                                                    <option value='Gujarati'>Gujarati</option>
                                                    <option value='Maliyalam'>Maliyalam</option>
                                                    <option value='Marathi'>Marathi</option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3">
                                                <select onChange={(e) => { setnasta(e.target.value) }} value={nasta} name='nasta' className="form-control show-tick" >
                                                    <option selected>Score</option>
                                                    <option value='10%'>10% </option>
                                                    <option value='20%'>20% </option>
                                                    <option value='30%'>30% </option>
                                                    <option value='40%'>40% </option>
                                                    <option value='50%'>50% </option>
                                                    <option value='60%'>60% </option>
                                                    <option value='70%'>70% </option>
                                                    <option value='80%'>80% </option>
                                                    <option value='90%'>90% </option>
                                                    <option value='100%'>100% </option>
                                                </select>
                                            </div>

                                            <div className="col-sm-3">
                                                <select onChange={(e) => { setviewlike(e.target.value) }} value={viewlike} name='viewlike' className="form-control show-tick" >
                                                    <option selected>Tomatometer</option>
                                                    <option value='10%'>10% </option>
                                                    <option value='20%'>20% </option>
                                                    <option value='30%'>30% </option>
                                                    <option value='40%'>40% </option>
                                                    <option value='50%'>50% </option>
                                                    <option value='60%'>60% </option>
                                                    <option value='70%'>70% </option>
                                                    <option value='80%'>80% </option>
                                                    <option value='90%'>90% </option>
                                                    <option value='100%'>100% </option>
                                                </select>
                                            </div>
                                            <div className="col-sm-3">
                                                <select onChange={(e) => { setrating(e.target.value) }} value={rating} name='rating' className="form-control show-tick">
                                                    <option selected>Rating</option>
                                                    <option value='1/5'>1/5 </option>
                                                    <option value='2/5'>2/5 </option>
                                                    <option value='3/5'>3/5 </option>
                                                    <option value='4/5'>4/5 </option>
                                                    <option value='5/5'>5/5 </option>
                                                </select>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='address' value={address} onChange={(e) => { setaddress(e.target.value) }} placeholder="Address" />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='earning' value={earning} onChange={(e) => { setearning(e.target.value) }} placeholder="Earning" />
                                                </div>
                                            </div>


                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <textarea rows={2} className="form-control no-resize" value={description} name='description' onChange={(e) => { setdescription(e.target.value) }} placeholder="Please type what you want..." defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <form id="frmFileUpload" className="dropzone" encType="multipart/form-data">
                                                    <div className="dz-message">
                                                        <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                        <h3>Drop files here or click to upload.</h3>
                                                        <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                    <div className="fallback">
                                                        <input name="file" id='img' type="file" multiple />
                                                        {/* <input type="submit" onClick={handleSubmit}/>Press */}
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

export default Add_Movies
