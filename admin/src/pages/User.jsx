import { Publish } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';

const User = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <div className="user page">
        <div className="userTitileContainer">
          <h1 className='title-page'>edit user</h1>
          <Link to="/newUser">
            <button className="userAddBtn ">create</button>
          </Link>
  
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="imgContainer"><img src={PF + "persons/p10.png"} alt="" /></div>
              <div className="userInfoContainer">
                <div className="username "><strong>laila ouhamou</strong></div>
                <div className="userjob ">software engineer</div>
              </div>
            </div>
            <div className="userShowBottom">
              <div className="title ">account details</div>
              <div className="info-details">
                <div className="infoItem">
                  <div className="icon"><i className="fa fa-user"></i></div>
                  <div className="text ">Laila99</div>
                </div>
                <div className="infoItem">
                  <div className="icon"><i className="far fa-calendar"></i></div>
                  <div className="text ">15/07/1999</div>
                </div>
              </div>
              <div className="title ">contact details</div>
              <div className="info-details">
                <div className="infoItem">
                  <div className="icon"><i className="fa fa-phone"></i></div>
                  <div className="text ">07 67 77 36 20</div>
                </div>
                <div className="infoItem">
                  <div className="icon"><i className="fa fa-envelope"></i></div>
                  <div className="text email">laila.ouhamou99@gmail.com</div>
                </div>
                <div className="infoItem">
                  <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                  <div className="text ">agadir, morocco.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <div className="title ">edit : </div>
            <form action="" className="editForm">
              <div className="editInfoText">
                <div className="fieldCouple">
                  <div className="field">
                    <label className="">Usrename</label>
                    <input type="text" value="Laila99" />
                  </div>
                  <div className="field">
                    <label className="">full name</label>
                    <input type="text" value="laila ouhamou" />
                  </div>
                </div>
                <div className="fieldCouple">
                  <div className="field">
                    <label className="">title</label>
                    <input type="text" value="software engineer" />
                  </div>
                  <div className="field">
                    <label className="">birthday</label>
                    <input type="date" value="15/07/1999" />
                  </div>
                </div>
                <div className="fieldCouple">
                  <div className="field">
                    <label className="">phone number</label>
                    <input type="text" value="07 67 77 36 20" />
                  </div>
                  <div className="field">
                    <label className="">email</label>
                    <input type="email" value="laila.ouhamou99@gmail.com" />
                  </div>
                </div>
  
                <div className="field">
                  <label className="">adress</label>
                  <input type="text" value="agadir, morocco" />
                </div>
              </div>
              <div className="editInfoImg">
                <div className="userUpdateUpload">
                  <input type="file" name="" id="uploadImg" hidden />
                  <div className="imgContainer"><img src={PF + "persons/p2.png"} alt="" /></div>
                  <label htmlFor="uploadImg" className="icon"><Publish /> </label>
                </div>
                <button className="updateBtn ">update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default User