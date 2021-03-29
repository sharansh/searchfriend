import react, { useState } from 'react'
import Card from './card';

function FriendSearchContainer() {
  const [keyword, setKeyword] = useState(null);
  const [nameAdded, setNameAdded] = useState(null);
  const [addFriend, setAddFriend] = useState(null);


  let [friendList, setFriendList] = useState([
    {name: 'sharansh', star: true, id:1},
    {name: 'shandilya', star: true},
    {name: 'swati', star: false},
    {name: 'dubey', star: false},
    {name: 'beauty', star: false},
    {name: 'mishra', star: false},
  ]);

  const updateFriendHandler = (e) => {
    setKeyword(e.target.value)
  }
  
  const sortedFriendHandler = friendList.filter((item) => {
      return item.name.startsWith(keyword);
  });

  const deleteHandler = (sortedFriendHandler,e, val) => {
    const notdeletedones = sortedFriendHandler.filter((item) => {
      return item.name !== val;
    });
    console.log(notdeletedones, val, sortedFriendHandler);
    setFriendList(notdeletedones);
  }

  let friendlist = null;
  if(keyword) {
    friendlist = sortedFriendHandler.map((item) => {
      return <Card key={item.id} name={item.name} star={item.star} delete={(e) => deleteHandler(friendList,e,item.name)}/>
    })
  }else {
    friendlist = friendList.map((item) => {
      return <Card key={item.id} name={item.name} star={item.star} delete={(e) => deleteHandler(friendList,e, item.name)}/>
  });
  }
  const nameAddedHandler = (e) => {
    setNameAdded(e.target.value);
  }
  const addFriendHandler = () => {
    friendList = [...friendList, { name: nameAdded, star:false}];
    setFriendList(friendList);
  }

  return (
      <div id=" custom-search-input" className="cardContainer">
        <div className="col-md-12 heading"><h4>FriendLIST</h4> </div>
        <div className="input-group col-md-12">
          <div className="col-md-12 inputinline">
              <input id="search" 
                type="text" 
                className="form-control input-lg col-md-8" 
                placeholder="Search" 
                value={keyword} 
                onChange={updateFriendHandler}
              />
							<button className="btn btn-info btn-md col-md-3" type="button">
                  Enter
							</button>
           </div>
        
           <div className="col-md-12 inputinline">
               <input 
                type="text" 
                onChange={nameAddedHandler}
                className="form-control input-lg col-md-8" 
                placeholder="Add as a friend" 
              />
              <input 
                className="btn btn-info btn-md col-md-3" 
                type="button" 
                value="submit"
                onClick={addFriendHandler}
              />
            </div>  
						</div>
						<ul className="list-group">
              {friendlist}
						</ul>
      </div>
  );
}

export default FriendSearchContainer;
