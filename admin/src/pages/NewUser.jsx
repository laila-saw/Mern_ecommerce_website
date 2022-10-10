import React from 'react'

const NewUser = () => {
    return (
        <div className="page newUser">
          <h1 className="title-page">New User</h1>
          <form className="addUserForm">
            <div className="newusergroup">
              <div className="newUserItem">
                <label className=''>username</label>
                <input type="text" placeholder='username' />
              </div>
              <div className="newUserItem">
                <label className=''>full name</label>
                <input type="text" placeholder='full name' />
              </div>
              <div className="newUserItem">
                <label className=''>email</label>
                <input type="email" placeholder='email' />
              </div>
              <div className="newUserItem">
                <label className=''>password</label>
                <input type="password" />
              </div>
              <div className="newUserItem">
                <label className=''>phone</label>
                <input type="text" placeholder='phone' />
              </div>
              <div className="newUserItem">
                <label className=''>address</label>
                <input type="text" placeholder='address' />
              </div>
              <div className="newUserItem">
                <label className=''>title</label>
                <input type="text" placeholder='title' />
              </div>
    
              <div className="newUserItem">
                <label className=''>gender</label>
                <div className="genderWrapper">
                  <input type="radio" name="gender" id="male" value="male" />
    
                  <label htmlFor="male">male</label>
                  <input type="radio" name="gender" id="female" />
                  <label htmlFor="female">female</label>
                </div>
              </div>
            </div>
            <button >create</button>
          </form>
        </div>
      )
}

export default NewUser