import React, {Component} from 'react'
import httpService from '../../service/httpService'

class Users extends Component {
  state = {
    toDoItems: [],
  }

  test = async () => {
    let userAPI = new httpService();
    const response = await userAPI.get('https://reqres.in/api/users?page=2');
    this.setState({toDoItems: response.data});
  }

  componentDidMount(){
    this.test()
  }

  render(){
      const {toDoItems} = this.state;
      const block = toDoItems.map((el,index) => (
        <div key={index}>
          <img style={{display:'block'}} src={el.avatar}/>
          <span>{`${el.first_name} ${el.last_name}`}</span>
          <p>{el.email}</p>
        </div>
      ))
    return (
      <div>
      {block}
      </div>
    );
  }
}

export default Users;