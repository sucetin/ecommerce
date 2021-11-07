import React, { Component } from 'react'

export default class MainContent extends Component {
  state = {
    pageTitle:"Customers", 
    customersCount:5,
    customers:[
      {id:1, name:"Sue", phone:'123-456', photo: "https://picsum.photos/id/1010/60"},
      {id:2, name:"Serif", phone:'125-456', photo: "https://picsum.photos/id/1020/60"},
      {id:3, name:"Selim", phone:"", photo: "https://picsum.photos/id/1033/60"},
      {id:4, name:"Ibrahim", phone:null, photo: "https://picsum.photos/id/1022/60"},
      {id:5, name:"Jennet", phone:'123-896', photo: "https://picsum.photos/id/1050/60"},
    ]
  };

  customerNameStyle = (name) => {
    if(name.startsWith("S")) return "green-highlight";
    else if (name.startsWith("I")) return "pink-highlight";
    else return "";
  }

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
        <span className="badge bg-secondary m-2">{this.state.customersCount}</span>
        <button className="btn btn-info" onClick={this.handleRefreshClick}>Refresh</button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer photo</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    )
  }

  handleRefreshClick = () => {
    console.log('click!')
    this.setState({
      customersCount:7,
    });
  }

  getPhoneToRender = (phone) => {
    return phone ? phone : <div className="bg-warning text-center p-2">No phone</div>;
  }

  getCustomerRow = () => {
    return(
    this.state.customers.map((person) => { 
      return(
        <tr key={person.id}>
          <td>{person.id}</td>
          <td><img src={person.photo} alt="profile{person.id}"></img></td>
          <td className={this.customerNameStyle(person.name)}>{person.name}</td>
          <td>{this.getPhoneToRender(person.phone)}</td>
        </tr>)
    })
    )
  }
}
