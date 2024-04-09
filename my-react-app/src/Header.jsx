
function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <div className='btn btn-ghost btn-square btn-onClick-event'>
                                <a href="\Homepage">Home</a>
                            </div>
                        </li>
                        <li>
                            <div className='btn btn-ghost btn-square btn-onClick-event'>
                                <a href="\About">About</a>
                            </div>
                        </li>
                        <li>
                            <div className='btn btn-ghost btn-square btn-onClick-event'>
                                <a href="\Contact">contact</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href='\Body' className="btn btn-ghost text-xl">CSBS - Computer Sciences And Businees Systems</a>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-left-px-1">
                        <li>
                            <div className='btn btn-ghost btn-square btn-onClick-event'>
                                <a href="\Signin">Student</a>
                            </div>
                        </li>
                        <li>
                            <div className='btn btn-ghost btn-square btn-onClick-event'>
                                <a href="\Stafflogin">Staff</a>
                            </div>
                        </li>
                
                    </ul>
               </div>
            
            </div >
        </div>
    );
}
export default Header;
