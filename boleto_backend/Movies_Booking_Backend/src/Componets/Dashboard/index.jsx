import React, { useState } from 'react'
import ChatBox from './ChatBox'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import axios from 'axios'

const Dashboard = () => {

    const [moviename, setmoviename] = useState([]);
    const [address, setaddress] = useState([]);
    const [earning, setearning] = useState([]);
    const [rating, setrating] = useState([]);

    axios.get('http://localhost:2000/movieData', {

    })
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setmoviename(response.data.data);
            // window.location.href = "/Login"
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    return (
        <>
            <Header />
            <Sidebar />
            <RightSideBar />
            <ChatBox />
            <section className="content home">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <h2>Home
                                <small>Welcome to BoleTo</small>
                            </h2>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 text-right">

                            <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> BoleTo</a></li>
                                <li className="breadcrumb-item active">Home</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="body">
                                    <h3 className="number count-to m-b-0" data-from={0} data-to={1600} data-speed={2500} data-fresh-interval={700}>1600 <i className="zmdi zmdi-trending-up float-right" /></h3>
                                    <p className="text-muted">Total Upload Movie</p>
                                    <div className="progress">
                                        <div className="progress-bar l-blush" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} style={{ width: '78%' }} />
                                    </div>
                                    {/* <small>Change 15%</small> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card">
                                <div className="body">
                                    <h3 className="number count-to m-b-0" data-from={0} data-to={3218} data-speed={2500} data-fresh-interval={1000}>3218 <i className="zmdi zmdi-trending-up float-right" /></h3>
                                    <p className="text-muted">This Week Upload Movie</p>
                                    <div className="progress">
                                        <div className="progress-bar l-green" role="progressbar" aria-valuenow={58} aria-valuemin={0} aria-valuemax={100} style={{ width: '58%' }} />
                                    </div>
                                    {/* <small>Change 23%</small> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <div className="body">
                                    <h3 className="number count-to m-b-0" data-from={0} data-to={284} data-speed={2500} data-fresh-interval={1000}>284 <i className="zmdi zmdi-trending-up float-right" /></h3>
                                    <p className="text-muted">Happy Viewer <i className="zmdi zmdi-mood" /></p>
                                    <div className="progress">
                                        <div className="progress-bar l-parpl" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{ width: '88%' }} />
                                    </div>
                                    {/* <small>Change 50%</small> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Movies</strong></h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                <li><a href="javascript:void(0);">Report</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    {/* Nav tabs */}
                                    <ul className="nav nav-tabs padding-0">
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#table-view">View</a></li>
                                    </ul>
                                    {/* Tab panes */}
                                    <div className="tab-content m-t-10">
                                        {/* <div className="tab-pane active" id="chart-view">
                                            <div id="area_chart" className="graph" />
                                            <div className="xl-slategray">
                                                <div className="body">
                                                    <div className="row text-center">
                                                        <div className="col-sm-3 col-6">
                                                            <h4 className="margin-0">$106</h4>
                                                            <p className="text-muted margin-0"> Today's</p>
                                                        </div>
                                                        <div className="col-sm-3 col-6">
                                                            <h4 className="margin-0">$907</h4>
                                                            <p className="text-muted margin-0">This Week's</p>
                                                        </div>
                                                        <div className="col-sm-3 col-6">
                                                            <h4 className="margin-0">$4210</h4>
                                                            <p className="text-muted margin-0">This Month's</p>
                                                        </div>
                                                        <div className="col-sm-3 col-6">
                                                            <h4 className="margin-0">$7,000</h4>
                                                            <p className="text-muted margin-0">This Year's</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="tab-pane" id="table-view">
                                            <div className="table-responsive">
                                                <table className="table m-b-0 table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Address</th>
                                                            <th>Earning</th>
                                                            <th>Reviews</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {moviename.map((value) => {
                                                            return (
                                                                <>

                                                                    <tr>
                                                                        <td>{value.moviename}</td>
                                                                        <td>{value.address}</td>
                                                                        <td>{value.earning}</td>
                                                                        <td>
                                                                            {value.rating}
                                                                        </td>
                                                                        <td>
                                                                            <button className="btn btn-sm btn-neutral"><i className="zmdi zmdi-chart" /></button>
                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })}



                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <div className="body">


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Dashboard
