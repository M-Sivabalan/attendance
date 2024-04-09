function Stafflogin ()
{
   return (
    <center>
          
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
  <form className="card-body top-padding-20 down-padding-20
  ">
    <div className="form-control">
        <h1 className="text-xl text-bold">Login Page</h1>
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <a className="btn btn-primary">Login</a>
    </div>
  </form>
</div>
</center>
   );
}
export default Stafflogin