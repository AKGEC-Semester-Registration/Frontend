import "./Logout.css";

const Logout = () => {
  return (
    <div className="container-01">
      <div className="card card__logout">
        <h1 className="h1__logout">Are You Sure ?</h1>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col ">
            <button
              className="btn btn-outline  mb-2  py-2 px-5 btn__logout btn-outline__logout"
              type="submit"
            >
              Go Back
            </button>
          </div>

          <div className="col ">
            <a href="#">
              <button
                className="btn blue mb-2  py-2 px-5 btn__logout blue__logout"
                type="submit"
              >
                Logout
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
