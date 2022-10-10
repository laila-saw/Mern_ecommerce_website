import React from 'react'
import Button from './Button'

const WidgetLg = () => {
    
    return (
      <div className="widgetLg">
        <h3 className="title ">latest transactions</h3>
        <table className="widgetLgTable">
          <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh ">customer</th>
            <th className="widgetLgTh ">date</th>
            <th className="widgetLgTh ">amount</th>
            <th className="widgetLgTh ">status</th>
          </tr>
          </thead>
          <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser ">
              <img src="./img/persons/p2.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName  ">saw saw</span>
            </td>
            <td className="widgetLgDate ">2 Jun 2021</td>
            <td className="widgetLgAmount ">$ 122.00</td>
            <td className="widgetLgstatus ">
              <Button type='approved' />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser ">
              <img src="./img/persons/p2.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName  ">saw saw</span>
            </td>
            <td className="widgetLgDate ">2 Jun 2021</td>
            <td className="widgetLgAmount ">$ 122.00</td>
            <td className="widgetLgstatus ">
              <Button type='declined' />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser ">
              <img src="./img/persons/p2.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName  ">saw saw</span>
            </td>
            <td className="widgetLgDate ">2 Jun 2021</td>
            <td className="widgetLgAmount ">$ 122.00</td>
            <td className="widgetLgstatus ">
              <Button type='pending' />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser ">
              <img src="./img/persons/p2.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName  ">saw saw</span>
            </td>
            <td className="widgetLgDate ">2 Jun 2021</td>
            <td className="widgetLgAmount ">$ 122.00</td>
            <td className="widgetLgstatus ">
              <Button type='approved' />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }

export default WidgetLg