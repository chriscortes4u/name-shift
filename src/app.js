const React = require('react')

const App = React.createClass({

getInitialState: function() {
  return {
    persons: [{
      name: 'Tom',
      id: 1
    },{
      name: 'Trip',
      id: 2
    },{
      name: 'Derek',
      id: 3
    },{
      name: 'Kendra',
      id: 4
    },{
      name: 'Andrea',
      id: 5
    },{
      name: 'Jared',
      id: 6
    },{
      name: 'Joshua',
      id: 7
    },{
      name: 'Joe',
      id: 10
    },{
      name: 'Cameron',
      id: 11
    },{
      name: 'Matt',
      id: 12
    }],
    members:[{
      name: 'Tom',
      id: 1,
      removed: false
    },{
      name: 'Trip',
      id: 2,
      removed: false
    }]
  };
},

 addMember (person) {

   return (e) => {
     let members = this.state.members.filter(member => member.id !== person.id)
     this.setState({members: [person,...members]})
   }
 },
removeMember (m){
  return (e) => {
    let members = this.state.members.filter(member => member.id !== m.id)
    this.setState({members})
  }
},
  render () {
    return (
      <div>
      <div style={{float: 'left'}}>
        <h3>People</h3>
        <ul>
          {this.state.persons.map(p =>
            <li key={p.id}>
              {p.name}
              <button><a href="#" onClick ={this.addMember(p)}>Add Member</a></button>
            </li>
          )}
        </ul>
      </div>
      <div style={{float: 'Right'}}>
        <h3>Team</h3>
        <ul>
          {this.state.members.map(m =>
            <li key={m.id}>
              {m.name}
              <button><a href="#" onClick ={this.removeMember(m)}>Remove</a></button>
            </li>
          )}
        </ul>
      </div>
      </div>
    )
  }
})

module.exports = App
