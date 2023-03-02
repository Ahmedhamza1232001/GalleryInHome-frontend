import './adminDashboard.css'
import { BsCart } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io";

const AdminDashboard =() =>{


    return(
        <div className='page-content'>
            <div className='row row-cols-1 row-cols-lg-4'>
                <div className='col'>
                    <div className='card radius-10 overflow-hidden bg-gradient-cosmic'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <p className='mb-0 text-white'>Total Orders</p>
                                    <h5 className='mb-0 text-white'>867</h5>
                                </div>
                                <div className='ms-auto text-white'>
                                    <span className='bx bx-cart font-30'><BsCart/></span>
                                </div>
                            </div>
                            <div className='progress bg-white-2 radius-10 mt-4'>
                                <div className='progress-bar bg-white' role="progressbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card radius-10 overflow-hidden bg-gradient-burning'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <p className='mb-0 text-white'>Total Income</p>
                                    <h5 className='mb-0 text-white'>$52,945</h5>
                                </div>
                                <div className='ms-auto text-white'>
                                    <span className='bx bx-cart font-30'><IoWalletOutline/></span>
                                </div>
                            </div>
                            <div className='progress bg-white-2 radius-10 mt-4'>
                                <div className='progress-bar bg-white' role="progressbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col'></div>
            </div>
        </div>
    )
}

export default AdminDashboard;