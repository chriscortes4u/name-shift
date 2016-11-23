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
     const newState ={}
     newState[person] = e.target.value
     this.setState(newState)
   }
 },
removeMember (member){
  member.preventDefault()
  if (confirm('Are you sure?') ) {
    json: this.state.member
  } (err, res, body) => {
    if (err) return console.log(err.message)
    this.setState({removed: true})
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
              <button><a href="#" onClick ={this.addMember}>Add Member</a></button>
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
              <button><a href="#" onClick ={this.removeMember}>Remove</a></button>
            </li>
          )}
        </ul>
      </div>
      </div>
    )
  }
})

module.exports = App
